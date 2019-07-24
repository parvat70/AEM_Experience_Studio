package com.dxp.experience.studio.core.models;

import java.io.StringWriter;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Property;
import javax.jcr.PropertyIterator;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.commons.json.jcr.JsonItemWriter;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.jcr.Value;
import com.dxp.experience.studio.core.constants.GlobalConstant;

@Model(adaptables = {SlingHttpServletRequest.class, Resource.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ComponentJsonModel {
     
        Logger LOGGER = LoggerFactory.getLogger(this.getClass());
     
        private String message;
        
        @SlingObject
        private SlingHttpServletRequest request;
        
        @SlingObject
        private SlingHttpServletResponse response;
               
        @PostConstruct
        protected void init() {
             
            message = "DXP Experience studio JSON\n";
                   
            if (request != null) {
                this.message += "Request Path: "+request.getRequestPathInfo().getResourcePath()+"\n";
            }
             
            LOGGER.info("inside post construct");
        }
     
        public String getMessage() {
            return message;
        }
        
        private Set<String> getNodePropertiesToIgnore() {
            Set<String> propertiesToIgnore = new HashSet<String>();
            propertiesToIgnore.add("jcr:createdBy");
            propertiesToIgnore.add("jcr:lastModifiedBy");
            propertiesToIgnore.add("jcr:lastModified");
            propertiesToIgnore.add("sling:resourceType");
            propertiesToIgnore.add("sling:jcr:mixinTypes");
            propertiesToIgnore.add("mix:versionable");
            propertiesToIgnore.add("cq:lastReplicationAction");
            propertiesToIgnore.add("jcr:versionHistory");
            propertiesToIgnore.add("cq:template");
            propertiesToIgnore.add("cq:lastReplicatedBy");
            propertiesToIgnore.add("jcr:predecessors");
            propertiesToIgnore.add("cq:lastReplicated");
            propertiesToIgnore.add("cq:lastModified");
            propertiesToIgnore.add("jcr:baseVersion");
            propertiesToIgnore.add("jcr:isCheckedOut");
            propertiesToIgnore.add("jcr:uuid");
            propertiesToIgnore.add("cq:lastModifiedBy");
            propertiesToIgnore.add("jcr:mixinTypes");
            propertiesToIgnore.add("jcr:created");
            propertiesToIgnore.add("jcr:primaryType");
            return propertiesToIgnore;
        }

        public String getResourceJson() {
        	final Resource resource = request.getResource(); 
        	final Node node = resource.adaptTo(Node.class);
            final StringWriter stringWriter = new StringWriter();
            final JsonItemWriter jsonWriter = new JsonItemWriter(getNodePropertiesToIgnore());

            JSONObject jsonObject = null;

            try {
                /* Get JSON with no limit to recursion depth. */
                jsonWriter.dump(node, stringWriter, -1);
                jsonObject = new JSONObject(stringWriter.toString());
            } catch (RepositoryException | JSONException e) {
                LOGGER.error("Could not create JSON", e);
            }

            return jsonObject.toString();
        }
        
    
	

}
