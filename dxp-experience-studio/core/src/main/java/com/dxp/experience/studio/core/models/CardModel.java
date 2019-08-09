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
public class CardModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Inject
	@Optional
	public Resource cards;

	@Inject
	@Optional
	public String variation;

	public String type;

	String multiCardJsonObj = null;
	String cardTypeObj = null;

	@PostConstruct
	protected void init() throws RepositoryException, JSONException {
		LOGGER.info("inside post construct card ");
		getCardJsonObject();
		LOGGER.info("again inside post construct card ");
		getCardType();
	}

	public String getCardJsonObject() throws RepositoryException, JSONException {

		if (cards != null) {

			Node cardnode = this.cards.adaptTo(Node.class);
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
				multiCardJsonObj = array.toString();
				return multiCardJsonObj;
			}
			return "[{}]";
		}
		return "[{}]";
	}

	public String getCardType() throws RepositoryException {
		if (variation != null) {
			if (variation.equals("card--double") || variation.equals("card--double card--solid")
					|| variation.equals("card--double top--right") || variation.equals("card--double top--left")
					|| variation.equals("card--double bottom--right")
					|| variation.equals("card--double card--solid top--left")
					|| variation.equals("card--double card--solid top--right")
					|| variation.equals("card--double top--right")
					|| variation.equals("card--double card--solid bottom--right")) {
				type = "2";
			}

			if (variation.equals("card--triple") || variation.equals("card--triple bottom--right")
					|| variation.equals("card--triple top--left") || variation.equals("card--triple top--right")
					|| variation.equals("card--triple card--solid")
					|| variation.equals("card--triple card--solid bottom--right")
					|| variation.equals("card--triple card--solid top--left")
					|| variation.equals("card--triple top--left") || variation.equals("card--triple top--right")
					|| variation.equals("card--triple card--solid")
					|| variation.equals("card--triple card--solid bottom--right")
					|| variation.equals("card--triple card--solid top--right")) {
				type = "3";
			}

			LOGGER.info("variation>>>>>>>>>>>>>>>>>" + variation);
			cardTypeObj = type;
			LOGGER.info("card type>>>>>>>>>>>>>>>>>" + cardTypeObj);

			return cardTypeObj;
		}
		return "\"\"";
	}
}
