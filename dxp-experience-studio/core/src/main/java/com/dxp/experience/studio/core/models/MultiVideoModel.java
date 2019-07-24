package com.dxp.experience.studio.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.jcr.ValueFormatException;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = Resource.class)
public class MultiVideoModel {
	Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Inject
	@Optional
	public Resource multivideo;

	String multiVideoJsonObject = null;
	String src=null;
	String title=null;
	String description=null;
	String textalign=null;
	
	
	@PostConstruct
	protected void init() throws RepositoryException, JSONException {
		LOGGER.info("inside post construct" + multivideo);
		getMultiVideoJsonObject();
	}
	

	public String getMultiVideoJsonObject() throws ValueFormatException, PathNotFoundException, RepositoryException, JSONException {

		

		Node node = multivideo.adaptTo(Node.class);
		LOGGER.info("***node value is multivideo ..***" + node.getName());

		NodeIterator ni = node.getNodes();
		LOGGER.info("**before while**");

	
		JSONArray array =new JSONArray();
		
		while (ni.hasNext()) {
			//LOGGER.info("****Properties**"+ni.);
			LOGGER.info("******Node size&&&******"+ni.getSize());
			
			Node child = ni.nextNode();
			LOGGER.info("***child get name***"+child.getName().toString());
		
			String src=null;
			String title=null;
			String description=null;
			String textalign=null;
			
			src=child.getProperty("src").getValue().toString();
			title=child.getProperty("title").getValue().toString();
			description=child.getProperty("description").getValue().toString();
			textalign=child.getProperty("textalign").getValue().toString();
			
			JSONObject VideoObj= new JSONObject();
			
			VideoObj.put("src", src);
			VideoObj.put("title",title);
			VideoObj.put("description", description);
			VideoObj.put("textalign", textalign);
			
			
			
			array.put(VideoObj);
			

		}
		LOGGER.info("final Array"+array.toString());
		multiVideoJsonObject=array.toString();	
		return multiVideoJsonObject;
	}

	
	}



