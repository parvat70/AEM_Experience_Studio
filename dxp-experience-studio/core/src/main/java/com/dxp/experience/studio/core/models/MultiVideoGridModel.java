package com.dxp.experience.studio.core.models;

import java.util.Iterator;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.RepositoryException;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

@Model(adaptables = { SlingHttpServletRequest.class, Resource.class })
public class MultiVideoGridModel {

	@Inject
	@Optional
	@Via("resource")
	public Resource multivideoGrid;

	@SlingObject
	private ResourceResolver resourceResolver;

	@SuppressWarnings("unchecked")
	public String getMultiVideoGridJSON() throws JSONException {

		JSONArray multiVideoJSONArray = new JSONArray();

		Node currentPage = this.multivideoGrid.adaptTo(Node.class);

		try {
			Iterator<Node> children = currentPage.getNodes();
			while (children.hasNext()) {

				String experianceFragmentPath = children.next().getProperty("fragmentPath").getValue().getString();
				experianceFragmentPath += "/jcr:content/root";

				Resource pageResource = resourceResolver.getResource(experianceFragmentPath);

				if (pageResource != null) {
					Node xfNode = pageResource.adaptTo(Node.class);

					Iterator<Node> componentNode = xfNode.getNodes();
					while (componentNode.hasNext()) {

						Node videoNode = componentNode.next();
						String videoTitle = videoNode.getProperty("title").getValue().getString();
						String videoDescription = videoNode.getProperty("description").getValue().getString();
						String videoSrc = videoNode.getProperty("src").getValue().getString();

						System.out.println("Title is : " + videoTitle);
						System.out.println("description is : " + videoDescription);
						System.out.println("src is : " + videoSrc);

						JSONObject video = new JSONObject();
						video.put("title", videoTitle);
						video.put("description", videoDescription);
						video.put("src", videoSrc);

						multiVideoJSONArray.put(video);

					}

				}

			}
		} catch (RepositoryException e) {
		}

		return multiVideoJSONArray.toString();

	}
}
