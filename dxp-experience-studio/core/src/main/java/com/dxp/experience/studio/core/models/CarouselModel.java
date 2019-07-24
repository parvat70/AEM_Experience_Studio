package com.dxp.experience.studio.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.commons.json.JSONException;
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
	

	String carouseljsonObject = null;
	
	

	public String getCarouseljsonObject() {
		return carouseljsonObject;
	}

	@PostConstruct
	protected void init() throws RepositoryException, JSONException {

		LOGGER.info("inside post construct" + imagecarousel);

		Node node = imagecarousel.adaptTo(Node.class);
		LOGGER.info("node value is .." + node.getName());

		NodeIterator ni = node.getNodes();
		LOGGER.info("**While Start**");

		StringBuilder carouselImagePath = new StringBuilder();
		
		while (ni.hasNext()) {
			//LOGGER.info("****Properties**"+ni.);

			Node child = ni.nextNode();

			if (child.hasProperty("sliders")) {

				String imagePath = child.getProperty("sliders").getValue().toString();
				carouselImagePath.append("\""+imagePath+"\",");
				
			}
			

		}
		//String paths = carouselImagePath.toString().replace(carouselImagePath.substring(carouselImagePath.length()-1), "");
		LOGGER.info("imagePath"+carouselImagePath);
		
		
		this.carouseljsonObject=carouselImagePath.toString();

		LOGGER.info("**Final Array JSON **  : " + carouselImagePath);

		
	}

}
