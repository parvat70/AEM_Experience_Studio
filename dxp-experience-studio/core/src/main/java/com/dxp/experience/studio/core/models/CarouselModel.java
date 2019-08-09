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
public class CarouselModel {
	Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Inject
	@Optional
	public Resource imagecarousel;

	String carouseljsonObject = "";

	/*@PostConstruct
	protected void init() throws RepositoryException, JSONException {
		LOGGER.info("inside post construct card ");
		getCarouseljsonObject();
		LOGGER.info("again inside post construct card ");
		getCarouseljsonObject();
	}*/

	public String getCarouseljsonObject() throws RepositoryException, JSONException {

		if (imagecarousel != null) {
		Node cardnode = imagecarousel.adaptTo(Node.class);
		LOGGER.info("node value for cards .." + cardnode.getName());

		NodeIterator ni = cardnode.getNodes();
		LOGGER.info("**While Start**");

		if(ni!=null) {
		JSONArray array = new JSONArray();
		while (ni.hasNext()) {
			Node child = ni.nextNode();

			String src = null;
			String headertext = null;
			String subheadertext = null;
			if (child.hasProperty("src") && child.getProperty("src") != null) {
				src = child.getProperty("src").getValue().toString();
			}
			if (child.hasProperty("headertext") && child.getProperty("headertext") != null) {
				headertext = child.getProperty("headertext").getValue().toString();
			}
			if (child.hasProperty("subheadertext") && child.getProperty("subheadertext") != null) {
				subheadertext = child.getProperty("subheadertext").getValue().toString();
			}
			JSONObject CarouselObj = new JSONObject();
			CarouselObj.put("src", src);
			CarouselObj.put("headertext", headertext);
			CarouselObj.put("subheadertext", subheadertext);
			array.put(CarouselObj);

		}
		LOGGER.info("final Card Array" + array.toString());
		carouseljsonObject = array.toString();
		LOGGER.info("carouseljsonObject----------" + carouseljsonObject);
		return carouseljsonObject;
		}
		return "[{}]";

	}
		return "[{}]";
	}
}
