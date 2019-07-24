package com.dxp.experience.studio.core.models;
import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = Resource.class)
public class PartnerModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@Inject
	@Optional
	public Resource partners;
	
	String partnersJsonObj=null;
	
	
	@PostConstruct
	protected void init() throws RepositoryException, JSONException{
		LOGGER.info("inside post construct card ");
		getPartnerJsonObject();
	}
	
	public String getPartnerJsonObject() throws RepositoryException, JSONException {
		
		Node partnernode = partners.adaptTo(Node.class);
		LOGGER.info("node value for cards .." + partnernode.getName());

		NodeIterator ni = partnernode.getNodes();
		LOGGER.info("**While Start**");

		JSONArray array =new JSONArray();
		while (ni.hasNext()) {
			Node child = ni.nextNode();
			
			String name=null;
			String image=null;
				
			name=child.getProperty("name").getValue().toString();
			image=child.getProperty("image").getValue().toString();
				
				JSONObject partnerObj= new JSONObject();
				partnerObj.put("name", name);
			    partnerObj.put("image", image);
				array.put(partnerObj);
				

		}
		
		partnersJsonObj=array.toString();
		LOGGER.info("partnersJsonObj>>>>>>>>>>>"+partnersJsonObj);
		return partnersJsonObj;
		
	}
}


