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
public class ThreeDCardModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@Inject
	@Optional
	public Resource threedcards;

	@Inject
	@Optional
	public String variation;

	@Inject
	@Optional
	public String type;

	String threeDCard = null;
	String threeCardVariation = null;

	/*
	 * @PostConstruct protected void init() throws RepositoryException,
	 * JSONException { LOGGER.info("inside Three D Card post construct method");
	 * getThreeDCardJson(); getThreeDCardVariation(); }
	 */

	public String getThreeDCardJson() throws RepositoryException, JSONException {

		if (threedcards != null) {
			Node cardnode = threedcards.adaptTo(Node.class);
			LOGGER.info("node value for cards .." + cardnode.getName());

			NodeIterator ni = cardnode.getNodes();
			LOGGER.info("**While Start**");
			if (ni != null) {
				JSONArray array = new JSONArray();
				while (ni.hasNext()) {
					Node child = ni.nextNode();

					String title = null;
					String description = null;
					String image = null;
					if (child.hasProperty("title") && child.getProperty("title") != null) {
						title = child.getProperty("title").getValue().toString();
					}
					if (child.hasProperty("description") && child.getProperty("description") != null) {
						description = child.getProperty("description").getValue().toString();
					}
					if (child.hasProperty("image") && child.getProperty("image") != null) {
						image = child.getProperty("image").getValue().toString();
					}
					JSONObject CardObj = new JSONObject();
					CardObj.put("title", title);
					CardObj.put("description", description);
					CardObj.put("image", image);
					array.put(CardObj);

				}
				LOGGER.info("final Card Array" + array.toString());
				threeDCard = array.toString();
				return threeDCard;
			}
			return "[{}]";

		}
		return "[{}]";
	}

	public String getThreeDCardVariation() throws RepositoryException {
		if (this.type != null) {
			if (type.equals("3")) {
				variation = "card--single card--solid";
				return variation;
			}
			return "card--single card--solid";
		}
		return "card--single card--solid";
	}

}
