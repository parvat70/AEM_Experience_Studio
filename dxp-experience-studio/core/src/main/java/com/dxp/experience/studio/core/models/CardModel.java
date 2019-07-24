package com.dxp.experience.studio.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = Resource.class)
public class CardModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@Inject
	@Optional
	public Resource cards;

	@Inject
	@Optional
	public String variation;

	@Inject
	@Optional
	public String type;

	String multiCardJsonObj = null;
	String cardVariationObj = null;

	@PostConstruct
	protected void init() throws RepositoryException, JSONException {
		LOGGER.info("inside post construct card ");
		getCardJsonObject();
		LOGGER.info("again inside post construct card ");
		getCardVariation();
	}

	public String getCardJsonObject() throws RepositoryException, JSONException {

		Node cardnode = cards.adaptTo(Node.class);
		LOGGER.info("node value for cards .." + cardnode.getName());

		NodeIterator ni = cardnode.getNodes();
		LOGGER.info("**While Start**");

		JSONArray array = new JSONArray();
		while (ni.hasNext()) {
			Node child = ni.nextNode();

			String title = null;
			String description = null;
			String image = null;
			title = child.getProperty("title").getValue().toString();
			description = child.getProperty("description").getValue().toString();
			image = child.getProperty("image").getValue().toString();
			JSONObject CardObj = new JSONObject();
			CardObj.put("title", title);
			CardObj.put("description", description);
			CardObj.put("image", image);
			array.put(CardObj);

		}
		LOGGER.info("final Card Array" + array.toString());
		multiCardJsonObj = array.toString();
		return multiCardJsonObj;

	}

	public String getCardVariation() throws RepositoryException {
		
			if (type.equals("2")) {
            variation = "card--double card--solid";
			}
			if (type.equals("3")) {
				variation = "card--triple card--solid";
			}
		
		cardVariationObj = variation;

		return cardVariationObj;
	}
}
