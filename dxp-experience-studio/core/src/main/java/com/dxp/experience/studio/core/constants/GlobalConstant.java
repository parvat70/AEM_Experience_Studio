package com.dxp.experience.studio.core.constants;

public class GlobalConstant {

    /** The Constant UNSTRUCTURED_NODE. */
    public static final String UNSTRUCTURED_NODE = "nt:unstructured";

    /** The Constant RESOURCE_TYPE. */
    public static final String RESOURCE_TYPE = "sling:resourceType";
    
    /** The Constant SLING FOLDER. */
    public static final String NT_SLING_FOLDER = "sling:Folder";

    /** The Constant COMPONENT. */
    public static final String COMPONENT = "component";

    /** The Constant PREDICATE_PATH. */
    public static final String PREDICATE_PATH = "path";

    /** The Constant PREDICATE_OFFSET. */
    public static final String PREDICATE_OFFSET = "p.offset";

    /** The Constant PREDICATE_LIMIT. */
    public static final String PREDICATE_LIMIT = "p.limit";

    /** The Constant PREDICATE_PATH_EXACT. */
    public static final String PREDICATE_PATH_EXACT = "path.exact";

    /** The Constant PREDICATE_PATH_FLAT. */
    public static final String PREDICATE_PATH_FLAT = "path.flat";

    /** The Constant PREDICATE_ORDERBY_SORT. */
    public static final String PREDICATE_ORDERBY_SORT = "orderby.sort";

    /** The Constant PREDICATE_ORDERBY. */
    public static final String PREDICATE_ORDERBY = "orderby";

    /** The Constant PREDICATE_CQ_TAGS. */
    public static final String PREDICATE_CQ_TAGS = "jcr:content/cq:tags";

    /** The Constant PREDICATE_CQ_TAGS_DAM. */
    public static final String PREDICATE_CQ_TAGS_DAM = "jcr:content/metadata/cq:tags";

    /** The Constant PREDICATE_DESC. */
    public static final String PREDICATE_DESC = "desc";

    /** The Constant PREDICATE_SORT_DATE_PROPERTY. */
    public static final String PREDICATE_SORT_DATE_PROPERTY = "@jcr:content/cq:lastReplicated";

    /** The Constant PREDICATE_CQ_PAGE. */
    public static final String PREDICATE_CQ_PAGE = "cq:Page";

    /** The Constant PREDICATE_DAM_ASSET. */
    public static final String PREDICATE_DAM_ASSET = "dam:Asset";

    /** The Constant PREDICATE_TYPE. */
    public static final String PREDICATE_TYPE = "type";

    /** The Constant PREDICATE_FULLTEXT. */
    public static final String PREDICATE_FULLTEXT = "fulltext";

    /** The Constant DEFAULT_OFFSET_VALUE. */
    public static final String DEFAULT_OFFSET_VALUE = "0";

    /** The Constant DEFAULT_LIMIT_VALUE. */
    public static final String DEFAULT_LIMIT_VALUE = "25";

    /** The Constant PREDICATE_GROUP1_OR. */
    public static final String PREDICATE_GROUP1_OR = "1_group.p.or";

    /** The Constant PREDICATE_VALUE_TRUE. */
    public static final String PREDICATE_VALUE_TRUE = "true";

    /** The Constant JCR_PRIMARY_TYPE. */
    public static final String JCR_PRIMARY_TYPE = "jcr:primaryType";

    /** The Constant DAM_ASSET_CONTENT. */
    public static final String DAM_ASSET_CONTENT = "dam:AssetContent";

    /** The Constant JCR_CONTENT. */
    public static final String JCR_CONTENT = "jcr:content";

    /** The Constant PROPERTY. */
    public static final String PROPERTY = "property";

    /** The Constant orderby.index. */
    public static final String PREDICATE_ORDER_INDEX = "orderby.index";

    /** NT File type constant*/
    public static final String NT_FILE = "nt:file";

    /** NT File type constant*/
    public static final String NT_FOLDER = "nt:folder";

    /** NT Resource type constant*/
    public static final String NT_RESOURCE = "nt:resource";

    /** jcr:mimeType */
    public static final String JCR_MIMETYPE = "jcr:mimeType";

    /**application/json*/
    public static final String APPLICATION_JSON = "application/json";

    /**jcr:data*/
    public static final String JCR_DATA = "jcr:data";

    /**jcr:lastModified*/
    public static final String JCR_LASTMODIFIED = "jcr:lastModified";

    /** The Constant true. */
    public static final String TRUE_STRING = "true";

    /** The Constant PREDICATE_GROUP_1_GROUP_1_TAGID. */
    public static final String PREDICATE_GROUP_1_GROUP_1_TAGID = "1_group.1_group.1_tagid";

    /** The Constant PREDICATE_GROUP_1_GROUP_1. */
    public static final String PREDICATE_GROUP_1_GROUP_1 = "1_group.1_group.";

    /** The Constant PREDICATE_GROUP_1_GROUP_2. */
    public static final String PREDICATE_GROUP_1_GROUP_2 = "1_group.2_group.";

    /** The Constant PREDICATE_TAGID_PROPERTY. */
    public static final String PREDICATE_TAGID_PROPERTY = "_tagid.property";

    /** The Constant PREDICATE_TAGID. */
    public static final String PREDICATE_TAGID = "_tagid";
    
    /** The Constant PREDICATE DATE RANGE*/
    public static final String PREDICATE_DATE_RANGE_PROPERTY = "1_group.1_daterange.property";

    /** The Constant ASSET_TITLE. */
    public static final String ASSET_TITLE = "dc:title";

    /** The Constant ASSET_MIME. */
    public static final String ASSET_MIME = "dam:MIMEtype";

    /** The Constant ASSET_MIME. */
    public static final String ASSET_FORMAT = "dc:format";

    /** The Constant ASSET_DESCRIPTION. */
    public static final String ASSET_DESCRIPTION = "dc:description";

    /** The Constant EMPTY_STRING. */
    public static final String EMPTY_STRING = "";

    public static final String[] EMPTY_STRING_ARRAY = {};

    /** The Constant SIZE_ONE. */
    public static final int SIZE_ONE = 1;

    /** The Constant property value */
    public static final String PREDICATE_PROPERTY_VALUE = "property.value";

    /** The Constant property operation */
    public static final String PROPERTY_OPERATION = "property.operation";

    /** The Constant FORWARD SLASH */
    public static final String SLASH_FORWARD = "/";

    /** The Constant EXISTS */
    public static final String EXISTS = "exists";

    /** The Constant Credit Class Page Properties path */
    public static final String CREDIT_CLASS_PROPERTIES = "/content/aem-dxp/jcr:content";

    /** The Constant Content Root Path */
    public static final String CONTENT_ROOT = "/content/aem-dxp";

    /** The Constant _Links. */
    public static final String _LINKS = "_links";

    /** The Constant Content Root Path */
    public static final String CONTENT_ROOT_ADMIN = "/content/admin";

    /** aem-dxp configuration node **/
    public static final String CONFIG_NODE_PID = "com.aem.tmobile.core.utils.TmoConfig";

    /** aem-dxp email configuration node **/   
		public static final String CONFIG_EMAIL_NOTIFICATION = "com.tmobile.wem.workflowEmailNotificationWorkflowId";

    /** aem-dxp email configuration node **/
    public static final String JCR_PATH = "JCR_PATH";

    /** phone browse page path **/
    public static final String CONFIG_PHONE_BROWSE_PAGE_PATH = "com.aem.tmobile.core.utils.cellPhoneBrowsePageUrl";

    /** accessory browse page path **/
    public static final String CONFIG_ACCESSORY_BROWSE_PAGE_PATH = "com.aem.tmobile.core.utils.accessoryPageUrl";

    /** internet device browse page path **/
    public static final String CONFIG_INTERNET_DEVICE_BROWSE_PAGE_PATH = "com.aem.tmobile.core.utils.internetDevicesPageUrl";

    /** product page root **/
    public static final String CONFIG_PRODUCT_PAGE_ROOT = "com.aem.tmobile.core.productPagesRootPath";

    /** product catalog property configuration **/
    public static final String CONFIG_PRODUCT_CATALOG = "com.tmobile.wem.utils.CatalogConfig";

    public static final String CONFIG_OSGI_GLOBAL_CONSTANTS = "com.aem.tmobile.core.utils.GlobalConfig";

    public static final String CONFIG_KEY_GLOBAL_CONSTANTS = "GlobalConstants";

    /**     **/

    /** Purge CDN Cache method - COMPLETE **/
    public static final String PURGE_CDN_CACHE_CONTENT_METHOD_COMPLETE = "COMPLETE";

    /** Purge CDN Cache method - PARTIAL **/
    public static final String PURGE_CDN_CACHE_CONTENT_METHOD_PARTIAL = "PARTIAL";

    // MAG-710

    public static final String INVENTORY_STATUS_PRE_ORDER = "AVAILABLE_FOR_PRE_ORDER";
    public static final String INVENTORY_STATUS_BACK_ORDER = "AVAILABLE_FOR_BACK_ORDER";
    public static final String INVENTORY_STATUS_OUT_OF_STOCK = "NOT_AVAILABLE";
    public static final String INVENTORY_STATUS_ALWAYS_AVAILABLE = "ALWAYS_AVAILABLE";
    public static final String INVENTORY_STATUS_AVAILABLE_WHEN_IN_STOCK = "AVAILABLE_WHEN_IN_STOCK";
    public static final String INVENTORY_STATUS_COMING_SOON = "COMING_SOON";
    public static final String INVENTORY_STATUS_ADD_TO_CART = "ADD_TO_CART";
    public static final String INVENTORY_STATUS_PRE_ORDER_CTA_TEXT = "AVAILABLE_STATUS_PRE_ORDER_CTA_TEXT";
    public static final String INVENTORY_STATUS_PRE_ORDER_CTA_LINK = "AVAILABLE_STATUS_PRE_ORDER_CTA_LINK";
    public static final String INVENTORY_STATUS_SIM_KIT_TOOLTIP = "AVAILABLE_STATUS_SIM_KIT_TOOLTIP";
    //
    /**
     * Constant for BrowseProductGrid component path in browse page
     */
    public static final String BROWSEPRODUCTGRID_RES_PATH_IN_PRODUCT_NODE = "/content-body/browseproductgrid";
    /**
     * Constant for product type attribute in browse page
     */
    public static final String PRODUCT_TYPE_ATTRIBUTE = "producttype";

    // MAG-710

    // SITEMAP SPECIFIC CONSTANT START
    public static final String NT_UNSTRUCTURED = "nt:unstructured";

    public static final String ACTION_TYPE = "actionType";

    public static final String SITEMAP_HTML_EXTENSION = ".html";

    // SITEMAP SPECIFIC CONSTANT END
    public static final String ROOT_PAGE_PATH = "/content/aem-dxp";
	
	 //Navigation constants
    public static final String NAV_HEADER_PATH = "/content/aem-dxp/consumer/jcr:content/header";
    public static final String NAV_FOOTER_PATH = "/content/aem-dxp/footer/jcr:content/common-header/footer";
    public static final String B2B_NAV_HEADER_PATH = "/content/aem-dxp/work/jcr:content/header";
    public static final String B2B_NAV_FOOTER_PATH = "/content/aem-dxp/b2bfooter/jcr:content/common-header/footer";

    
    //Store Details constant
    public static final String STORE_DETAILS_PATH = "/content/aem-dxp/store-details/jcr:content/content-body/storedetails";  

    /*
     * Constants for UNav kit
     */
    public static final String B2B_HOST_URL = "publisher.corporate.aem-dxp.com";

    public static final String B2C_HOST_URL = "digital.aem-dxp.com";

    public static final String B2C_IDENTIFIER = "b2c";

    public static final String B2B_IDENTIFIER = "b2b";

    public static final String B2B_CONTEXT_PATH = "/srvspub/ngunavService.business.json";

    public static final String B2C_CONTEXT_PATH = "/srvspub/ngunavService.json";

    public static final String DEVICE_NODE_IN_ROOT_PAGE = "/content/aem-dxp/jcr:content/content-body/rootPage/deviceAuthoring";

    public static final String UNAV_HEADER_RESOURCE_TYPE_CHECK = "common-header";

    public static final String UNAV_FOOTER_RESOURCE_TYPE_CHECK = "common-footer";
    public static final String CONTENTBODY = "content-body";

    public static final String B2B_ROOT_NODE_COMP_PATH = "/content/aem-dxp/jcr:content/content-body/rootPage/B2Bauthoring";

    public static final String CALL_ME_NOW_OPHOURS_ROOT_NODE_COMP_PATH = "jcr:content/content-body/rootPage/callMeNowHolidaysOpHrs";

    public static final String B2B_CREDITSELECTOR_TEXT = "showCreditClassSelector";



    /*
     * Constant for Sending confirmation email in checkout
     */
    public static final String MESSAGE_CHECKOUT_PAGE_PATH = "/content/aem-dxp/checkout/jcr:content/content-body/messages";

    //Constants for AEMRoutes Config

    public static final String SPANISH_TITLE = "spanishTitle";

    public static final String SPANISH_DESCRIPTION = "spanishDescription";

    public static final String SPANISH_KEYWORDS = "spanishKeywords";

    // Constants for 301-302 author redirect URL
    public static final String ADD_REDIRECT_URL="addRedirectUrl";
    public static final String UPDATE_REDIRECT_URL = "updateRedirectUrl";
    public static final String DELETE_REDIRECT_URL="deleteRedirectUrl";
    public static final String AUTHOR_REDIRECT_ROOT_NODE_PATH = "/content/aem-dxp/tmng-deleted-nodes";
    public static final String AUTHOR_REDIRECT_NODE_NAME = "nodeName";
    public static final String AUTHOR_REDIRECT_URL_CONTENT_PATH = "contentPath";
    public static final String AUTHOR_REDIRECT_URL_REDIRECT_URL = "redirectUrl";
    public static final String AUTHOR_REDIRECT_URL_REDIRECT_TYPE = "redirectType";

    //Incapsula Purge URL Property
    public static final String INCAPSULA_SERVICE_URL = "https://sfpa4c0zxi.execute-api.us-west-2.amazonaws.com/prod?followlocation";
    public static final String INCAPSULA_XAPI_KEY = "x-api-key";
    public static final String INCAPSULA_XAPI_KEY_DEFAULT_VALUE = "jubyqgs7BE52tXeOKF9gn6fldAQygfY5amqTtoFx";
    public static final String INCAPSULA_SITE_ID = "site_id";
    public static final String INCAPSULA_SITE_ID_VALUE = "1800636";
    public static final String INCAPSULA_SITE_ID_VALUE_BIZ = "1730667";
    public static final String INCAPSULA_RESOURCE_PATTERN ="resource_pattern";
    public static final String INCAPSULA_RESOURCE_PATTERN_VALUE = "contains";
    public static final String INCAPSULA_RESOURCE_URL = "resource_url";

    //Constants for SEO data

    public static final String SEO_UPDATE_NODE ="update";
    public static final String SEO_ADD_NEW_NODE ="add";
    public static final String SEO_DELETE_NODE ="delete";
    public static final String SEO_NEW_NODE ="delete";
    public static final String SEO_REQUEST_PARAM_URL="url";
    public static final String SEO_ROOT_NODE_DEFAULT_VALUE = "/content/aem-dxp/seo";
    public static final String SEO_META_DATA_TAGS ="metaData";
    public static final String SEO_NODE_NAME ="nodeName";

    public static final String ACTION_SEO= "action";
    public static final String SEO_URL= "url";
    public static final String SEO_BROWSE_TYPE= "browseType";
    public static final String RESPONSE_STATUS_CODE="statusCode";
    public static final String RESPONSE_STATUS_SUCCESS="success";

    public static final String CANONICAL_URL ="canonicalUrl";
    public static final String ENGLISH_TITLE ="englishTitle";
    public static final String ENGLISH_DESCRIPTION ="englishDescription";
    public static final String ENGLISH_KEYWORDS ="englishKeywords";
    public static final String BROWSE_CRX_JSON_PATH ="/etc/browse-cache/";
    public static final String MINIBROWSE_DEVICE_SKU_RES_PATH= "/content/aem-dxp/smartcartdialog/jcr:content/content-body/cart/miniBrowse";
    public static final String MINIBROWSE_TABLETS_SKU_RES_PATH= "/content/aem-dxp/smartcartdialog/jcr:content/content-body/cart/miniBrowseTablet";
    public static final String MINIBROWSE_ACCESSORY_SKU_RES_PATH= "/content/aem-dxp/smartcartdialog/jcr:content/content-body/cart/accessoriesModal";
    public static final String PROPERTY_MINI_BROWSE_TABLET="miniBrowseTabletSku";
    public static final String PROPERTY_MINI_BROWSE_DEVICE="miniBrowseSku";
    public static final String PROPERTY_MINI_BROWSE_ACCESSORY_TAB1="skuTab1";
    public static final String PROPERTY_MINI_BROWSE_ACCESSORY_TAB2="skuTab2";
    public static final String PROPERTY_MINI_BROWSE_ACCESSORY_TAB3="skuTab3";
    
    public static final String SLING_TNMG_REPO_SUB_SERVICE = "tmngRepoService";

    //constants for cdn purge workflow

    public static final String INCAPSULA_RESOURCE_PATTERN_EQUALS_VALUE = "equals";
    public static final String TMOBILE_ROOT = "/content/aem-dxp/";
    public static final String CONSUMER_ROOT = "/consumer/";
    public static final String BUSINESS_ROOT = "/work/";
    public static final String DEACTIVATE = "Deactivate";
    public static final String DELETE = "Delete";
    public static final String CDN_PURGE_CONFIG_NODE = "/content/aem-dxp/cdnPurge/jcr:content/content-body/cdnpurgeconfig";
    
    public static final String AEM_ROUTES_ROOT_SELECTOR = "root";
		public static final String PDP_CACHE_ROOT_PATH ="/etc/productDetailsCache/";

    // contact form path constant
    public static final String CONTACT_FORM_PATH = "/content/aem-dxp/work/jcr:content/header/headerParsys/contactform";

    private GlobalConstant() {
        /**
         * The private constructor to ensure class is not instantiated
         */
    }
}
