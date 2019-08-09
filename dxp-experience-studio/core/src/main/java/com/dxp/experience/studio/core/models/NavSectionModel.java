package com.dxp.experience.studio.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

@Model(adaptables = Resource.class)
public class NavSectionModel {
		
//	Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@Inject
	@Optional
	public Resource navsection;

}
