package com.dxp.experience.studio.core.models;

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
public class FooterModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	
	@Inject
	@Optional
	public Resource contactinfo;

	@Inject
	@Optional
	public Resource socialicons; 

	String allDetailsJsonObj = "";
	String detailsJsonObj = "";
	String mediaDetailsJsonObj = "";

/*	@PostConstruct
	protected void init() throws RepositoryException, JSONException {
		LOGGER.info("inside post construct card ");
		getSocialMediaJsonObject();
		LOGGER.info("again inside post construct card ");
		getContactJsonObject();
		
	
	}*/

	public String getContactJsonObject() throws RepositoryException, JSONException {

		try {
			LOGGER.info("inside get json method ..");
			if (contactinfo != null) {
				Node detailsNode = contactinfo.adaptTo(Node.class);
				LOGGER.info("node value for team details .." + detailsNode.getName());
				if (detailsNode != null) {
					NodeIterator ni = detailsNode.getNodes();
					LOGGER.info("**While Start**");

					JSONArray array = new JSONArray();
					while (ni.hasNext()) {
						Node child = ni.nextNode();
						LOGGER.info("child node name is .." + child.getName());
						String shortname = null;
						String fullname = null;
						String phone = null;
						String image = null;

						if (child.hasProperty("shortname") && child.getProperty("shortname") != null) {
							shortname = child.getProperty("shortname").getValue().toString();
						}
						if (child.hasProperty("fullname") && child.getProperty("fullname") != null) {
							fullname = child.getProperty("fullname").getValue().toString();
						}
						if (child.hasProperty("phone") && child.getProperty("phone") != null) {
							phone = child.getProperty("phone").getValue().toString();
						}

						if (child.hasProperty("image") && child.getProperty("image") != null) {
							image = child.getProperty("image").getValue().toString();
						}
						JSONObject detailsObj = new JSONObject();
						detailsObj.put("shortName", shortname);
						detailsObj.put("fullName", fullname);
						detailsObj.put("phone", phone);
						detailsObj.put("image", image);
						array.put(detailsObj);

					}
					LOGGER.info("final details Array contact info" + array.toString());
					return array.toString();
				}

			}
		} catch (Exception e) {
			LOGGER.info("Exception /...." + e.getMessage());
		}
		return "[{}]";
	}

	public String getSocialMediaJsonObject() throws RepositoryException, JSONException {

		try {
			LOGGER.info("inside social media method .. socialicons " + socialicons);
			if (socialicons != null) {
				Node socialMediaNode = socialicons.adaptTo(Node.class);
				LOGGER.info("node value for team details .." + socialMediaNode.getName());
				if (socialMediaNode != null) {
					NodeIterator ni = socialMediaNode.getNodes();
					LOGGER.info("**While Start**");

					JSONArray mediaArray = new JSONArray();
					while (ni.hasNext()) {
						Node child = ni.nextNode();
						LOGGER.info("child node name is .." + child.getName());
						String icon = null;
						String path = null;

						if (child.hasProperty("icon") && child.getProperty("icon") != null) {
							icon = child.getProperty("icon").getValue().toString();
						}

						if (child.hasProperty("path") && child.getProperty("path") != null) {
							path = child.getProperty("path").getValue().toString();
						}

						JSONObject mediaObj = new JSONObject();
						mediaObj.put("icon", icon);
						mediaObj.put("path", path);

						mediaArray.put(mediaObj);

					}
					LOGGER.info("final details Array icon" + mediaArray.toString());
					return mediaArray.toString();
				}
			}
		} catch (Exception e) {
			LOGGER.info("Exception /...." + e.getMessage());
		}
		return "[{}]";
	}

}
