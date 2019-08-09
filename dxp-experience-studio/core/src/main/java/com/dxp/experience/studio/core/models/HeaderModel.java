package com.dxp.experience.studio.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.wcm.api.Page;
import com.dxp.experience.studio.core.beans.HeaderBeans;
import com.dxp.experience.studio.core.service.NavigationService;

@Model(adaptables = { SlingHttpServletRequest.class,
		Resource.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeaderModel {

	Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Inject
	@Optional
	private Resource currentPage;

	@Inject
	protected NavigationService navigationService;

	@Inject
	private ResourceResolver resourceResolver;
	
	private String parentPagePath = null;

	public List<HeaderBeans> headerItem = new ArrayList<HeaderBeans>();

	@PostConstruct
	protected void init() {

		LOGGER.info("inside Header model post construct");

	}

	public String getHeaderItems() {

		parentPagePath=currentPage.getPath();
		LOGGER.info("<<<<<<<<<<<<page path>>>>>>>>>"+parentPagePath);
		String headJson = null;
		LOGGER.info(" START inside Header model post construct");
		try {

			LOGGER.info(" insite try model ====================");
			headJson = navigationService.getNavigationSectionNodes(resourceResolver, parentPagePath);
			

		}
		catch (Exception e) {
			LOGGER.info("Exception in Model==================>>", e.getMessage());
		}
		LOGGER.info(" END inside Header model post construct"+headJson.toString());
		return headJson;
	}

}
