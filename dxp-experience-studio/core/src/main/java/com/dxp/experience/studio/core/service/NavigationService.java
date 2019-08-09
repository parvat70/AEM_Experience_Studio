package com.dxp.experience.studio.core.service;

import org.apache.sling.api.resource.ResourceResolver;

public interface NavigationService {

	public String getNavigationSectionNodes(ResourceResolver resourceResolver, String parentPagePath);
}
