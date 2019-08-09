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
public class TeamModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@Inject
	@Optional
	public Resource teamDetails;

	String allDetailsJsonObj = null;
	String detailsJsonObj = null;
	Long itemcount;
	Long totalcount;

	public String getTeamJsonObject() throws RepositoryException, JSONException {
		if (teamDetails != null) {
			Node detailsNode = teamDetails.adaptTo(Node.class);
			LOGGER.info("node value for team details .." + detailsNode.getName());

			NodeIterator ni = detailsNode.getNodes();
			LOGGER.info("**While Start**");
			LOGGER.info("**NI Size**" + ni.getSize());

			if (ni != null) {
				itemcount = ni.getSize();
				JSONObject mainObject = new JSONObject();
				JSONArray array = new JSONArray();
				while (ni.hasNext()) {
					Node child = ni.nextNode();
					LOGGER.info("child node name is .." + child.getName());
					String img = null;
					String teamname = null;
					String designation = null;
					String department = null;
					String heroimg = null;

					if (child.hasProperty("img") && child.getProperty("img") != null) {
						img = child.getProperty("img").getValue().toString();
					}
					if (child.hasProperty("teamname") && child.getProperty("teamname") != null) {
						teamname = child.getProperty("teamname").getValue().toString();
					}
					if (child.hasProperty("designation") && child.getProperty("designation") != null) {
						designation = child.getProperty("designation").getValue().toString();
					}

					if (child.hasProperty("department") && child.getProperty("department") != null) {
						department = child.getProperty("department").getValue().toString();
					}
					if (child.hasProperty("heroimg") && child.getProperty("heroimg") != null) {
						heroimg = child.getProperty("heroimg").getValue().toString();
					}

					JSONObject detailsObj = new JSONObject();
					detailsObj.put("img", img);
					detailsObj.put("name", teamname);
					detailsObj.put("designation", designation);
					detailsObj.put("department", department);
					detailsObj.put("heroimg", heroimg);
					array.put(detailsObj);

				}
				LOGGER.info("final details Array>>team model" + array.toString());
				allDetailsJsonObj = array.toString();
				return allDetailsJsonObj;

			}
			return "[{}]";
		}
		return "[{}]";

	}


	public Long getTotalItemCount() throws RepositoryException {
		if (teamDetails != null) {
			Node detailsNode = teamDetails.adaptTo(Node.class);
			LOGGER.info("node value for team details .." +detailsNode.getName());
			NodeIterator ni = detailsNode.getNodes();
			LOGGER.info("**While Start**");
			LOGGER.info("**NI Size**" + ni.getSize());
			if (ni != null) 
			{
				totalcount = ni.getSize();
				
			}
		}
		return totalcount;
	}
	public Long getInitialIndexCount() throws RepositoryException {
		Long itemcount= getTotalItemCount();
		itemcount = itemcount-1;
		return itemcount;
	}
}
