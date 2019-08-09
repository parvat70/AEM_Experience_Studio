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
public class NumberModel {
	Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Inject
	@Optional
	public Resource numbers;

	@Inject
	@Optional
	public String title;

	@Inject
	@Optional
	public String description;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNumberJsonObject() throws RepositoryException, JSONException {

		if (numbers != null) {

			Node numberNode = numbers.adaptTo(Node.class);

			if (numberNode != null) {

				NodeIterator numberNodes = numberNode.getNodes();

				JSONArray array = new JSONArray();

				while (numberNodes.hasNext()) {

					Node child = numberNodes.nextNode();

					String primaryimg = child.getProperty("primaryimg").getValue().toString();
					String text1 = child.getProperty("text1").getValue().toString();
					String color="";
					String secondaryimg="";
					
				
					if (child.hasProperty("secondaryimg") && child.getProperty("secondaryimg") != null) {
						secondaryimg = child.getProperty("secondaryimg").getValue().toString();
					}
					if ((child.hasProperty("secondaryimg"))) {
						if (child.getProperty("secondaryimg").getValue() == null) {
							secondaryimg = null;
						}
						
					}
					
					String text2 = child.getProperty("text2").getValue().toString();

					JSONObject numberObj = new JSONObject();
					numberObj.put("primaryimg", primaryimg);
					numberObj.put("text1", text1);
					numberObj.put("secondaryimg", secondaryimg);
					numberObj.put("text2", text2);

					array.put(numberObj);

				}

				LOGGER.info("Number obj>>>>>>>" + array.toString());
				return array.toString();
			}
			return "[{}]";
		}
		return "[{}]";
	}

}
