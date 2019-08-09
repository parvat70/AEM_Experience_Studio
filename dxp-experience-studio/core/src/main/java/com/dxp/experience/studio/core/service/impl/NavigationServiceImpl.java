package com.dxp.experience.studio.core.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.Session;

import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONObject;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.dxp.experience.studio.core.service.NavigationService;

@Component(service = NavigationService.class, immediate = true)
public class NavigationServiceImpl implements NavigationService {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	// private Session session;

	// Inject a Sling ResourceResolverFactory
	/*
	 * @Reference private ResourceResolverFactory resolverFactory;
	 */

	@Reference
	private QueryBuilder queryBuilder;

	@Override
	public String getNavigationSectionNodes(ResourceResolver resourceResolver, String parentPagePath) {
		
		LOGGER.info("inside method...........................................");

		Session session = resourceResolver.adaptTo(Session.class);
		JSONArray navigationJsonArray = new JSONArray();

		try {
			LOGGER.info("inside try...........................................");
			Map<String, String> map = new HashMap<String, String>();
			JSONObject NavObj =null;
			map.put("path", parentPagePath);
			map.put("1_property", "sling:resourceType");
			map.put("1_property.value", "dxp-experience-studio/components/content/navigationsection");
			LOGGER.info("step one...........................................");

			LOGGER.info("queryBuilder.........................................." + queryBuilder);
			LOGGER.info("session.........................................." + session);

			Query query = queryBuilder.createQuery(PredicateGroup.create(map), session);
			SearchResult result = query.getResult();
			long totalMatches = result.getTotalMatches();
			LOGGER.info("step two..........................................." + totalMatches);

			for (Hit hit : result.getHits()) {
				LOGGER.info("number of hits....." + hit.getTitle());
				Node node = hit.getNode();

				LOGGER.info("***navigation Node*******" + node.getName());

				NodeIterator ni = node.getNodes();

				while (ni.hasNext()) {
					Node child = ni.nextNode();
				

					LOGGER.info("CHILD>>>>>>>>>>>>>" + child.getName());

					if (child.getName().equals("navsection")) {
						NodeIterator iterator = child.getNodes();
						while (iterator.hasNext()) {

							Node subchild = iterator.nextNode();
							NavObj = new JSONObject();
							if (subchild.hasProperty("sectionname")&& subchild.getProperty("sectionname")!=null) {
								NavObj.put("name", subchild.getProperty("sectionname").getValue().getString());
							}

							if (subchild.hasProperty("sectionid")&& subchild.getProperty("sectionid")!=null) {
								NavObj.put("id", subchild.getProperty("sectionid").getValue().getString());

							}
							
							
							navigationJsonArray.put(NavObj);
						}
					}

				} 
			}

			LOGGER.info("array................." + navigationJsonArray.toString());

			return navigationJsonArray.toString();

		} catch (Exception e) {
			LOGGER.info("exception=============================================" + e.getMessage());
			e.printStackTrace();

		}
		return navigationJsonArray.toString();
	}

}
