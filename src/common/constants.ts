export class Constants {

    public static DOT_ENV = require('dotenv').config();

    // API Routes
    public static API_VERSION = 'v0.0.1';
    public static API_PREFIX = 'api';

    // Server Configurations
    public static PORT = process.env.PORT ? process.env.PORT : '3000';

    public static SESSION_SECRET_KEY = 'asdmkasldmsalkdmasldkmsaldk';
    public static CONNECTION_SECRET_KEY = 'qUTRmDQFH%PhG3ZvK?L?x5dB&CweP*23-&b$x$@V6r4G*vFvuj4^QxzwtAD&yVMdV+*REY8=SQgj$2#jGfpbr+bm_5$nXweMUW*KX63Z&EyxM*QsDyh^x#q?!nVHUwJv';

    // Context Layer Content
    public static CURRENT_USER = 'user';
    public static CURRENT_SESSION = 'sessionId';
    public static CURRENT_LANGUAGE = 'language';
    public static CURRENT_REQUEST_ROUTE = 'route';
    public static CURRENT_REQUEST_OS_TYPE = 'osType';
    public static CURRENT_REQUEST_TIMEZONE = 'timezone';

    // Database Configurations
    public static DATABASE_SCHEMA = process.env.DB_SCHEMA;

    // Regex
    public static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public static PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%+.*_?&#-]{8,15}$/;
    public static PHONE_NUMBER_REGEX = /^(\+)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)-\d{5,10}$/;
    public static VALIDATION_REGEX_PASSWORD = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,20})/;
    public static VALIDATION_USERNAME = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    public static TRUCK_SEQUENCE_NUMBER_LENGTH_REGEX = /^([0-9]{6,10})$/;

    // Auth Configuration
    public static AUTH_HEADER_KEY = 'authorization';
    public static AUTH_TYPE = 'Bearer';
    public static JWT_SECRET_KEY =
        'SjAEgx2k2N_RbYLwnS6sN0cBYdgo3Vp7MgFLyvtnVxOlWSoHbgIW4l9JmauQILFReGSHzG5e2HWN9fQ3sE3e6PmuRdHItu5k2I8iq6zr3XsQBS_c1Mg3TfwRyKSFlxjsno6GPTkBjau3TDyCorriXHLSkmhpnmg_ARbWfvtrAgo1M0l55TXzXExY9HtT8un-4fjziLpKotYUgGwBJhQVCwG6pRCdgX7XY1vQ0Z15pBHFOMXwnZR7mRYxGaK8vgGFs7gWkuBwVcz3H-B18Gz36kCSGTcheT9U2RFlBa7pkMvelSJmnwV65LyAkjTz_Ltv-NDRpXmM6cUxkM0cqFzvkA';
    public static JWT_ENCODE_ALGORITHM = 'HS256';
    public static JWT_ACCESS_TOKEN_WEB_EXPIRATION_INTERVALE = '2h';
    public static JWT_ACCESS_TOKEN_MOBILE_EXPIRATION_INTERVALE = '365d';
    public static JWT_REFRESH_TOKEN_EXPIRATION_INTERVALE = '180d';
    public static JWT_TOKEN_KYE_SEPARATOR = '-';
    public static LIST_SPLITTER = ',&,';
    public static OTP_EXPIRED = 60 * 30 * 1000;

    // Email Configuration
    public static EMAIL_HOST = process.env.EMAIL_HOST ? process.env.EMAIL_HOST : 'smtp.eu.mailgun.org';
    public static EMAIL = process.env.EMAIL ? process.env.EMAIL : 'info@madar.app';
    public static EMAIL_PASSWORD = process.env.EMAIL_PASSWORD ? process.env.EMAIL_PASSWORD : '7b0ec1f2c754e5089220b4da79d7711a-24e2ac64-7746b154';
    public static EMAIL_PORT = parseInt(process.env.EMAIL_PORT ? process.env.EMAIL_PORT : '587', 10);
    public static VERIFY_EMAIL_URL = process.env.FRONTEND_URL
        ? process.env.FRONTEND_URL + `/${Constants.API_VERSION}/verify-email/`
        : `http://localhost:${Constants.PORT}/${Constants.API_VERSION}/verify-email/`;

    public static VERIFY_CUSTOMER_EMAIL_URL = process.env.CUSTOMER_PORTAL
        ? process.env.CUSTOMER_PORTAL + `/${Constants.API_VERSION}/verify-email/`
        : `http://localhost:${Constants.PORT}/${Constants.API_VERSION}/verify-email/`;

    public static RESET_PASSWORD_EMAIL_URL = process.env.FRONTEND_URL
        ? process.env.FRONTEND_URL + `/${Constants.API_VERSION}/reset-password-email/`
        : `http://localhost:${Constants.PORT}/${Constants.API_VERSION}/reset-password-email/`;

    public static RESET_CUSTOMER_PASSWORD_EMAIL_URL = process.env.CUSTOMER_PORTAL
        ? process.env.CUSTOMER_PORTAL + `/${Constants.API_VERSION}/reset-password-email/`
        : `http://localhost:${Constants.PORT}/${Constants.API_VERSION}/reset-password-email/`;

    public static VERIFICATION_EMAIL_SUBJECT = 'Verify Email';
    public static EMAIL_VERIFICATION_EXPIRED = 60 * 60 * 24 * 1000;
    public static RESET_PASSWORD_EMAIL_SUBJECT = 'Reset Password';
    public static EMAIL_RESET_PASSWORD_EXPIRED = 60 * 30 * 1000;

    // SMS Configuration
    public static SMS_URL = process.env.SMS_URL;
    public static SMS_APP_ID = process.env.SMS_APP_ID;
    public static SMS_SENDER_ID = process.env.SMS_SENDER_ID;

    // Timezone
    public static TIMEZONE_OFFSET = process.env.TIMEZONE_OFFSET ? process.env.TIMEZONE_OFFSET : '+2';

    // Time Format
    public static DATE_FILTER_FORMAT = 'MM/DD/YYYY';

    // Pagination
    public static LIMIT = 10;
    public static OFFSET = 0;

    // Cron Expression
    public static CRON_MISSED_TASKS_EXPRESSION = '*/30 * * * *'; // Every 30 mins
    public static CRON_TASK_REMINDER_EXPRESSION = '0 9 * * *'; // Daily at 9 AM

    // Constants
    public static DEFAULT_LANG = 'en';
    public static CURRENT_APP_VERSION = 'v1.0.0';
    public static FORCE_UPDATE = false;
    public static DEFAULT_SORT_FIELD = 'createdAt';
    public static TEXT_PLACEHOLDER_VARIABLE = '%c';
    public static ONE_DAY = 1000 * 60 * 60 * 24;  // One day Time in ms (milliseconds)
    public static BASE_DIRECTORY = '';
    public static PRODUCT_TYPE_COMPARE_FIELD = 'productTypeId';
    public static DEFAULT_DETENTION_CHARGE = 0;
    public static MIN_SHIPMENT_REPEATED_NUMBER = 0;
    public static IQAMA_MIN = 1000000000;
    public static IQAMA_MAX = 9999999999;
    public static NON_RESIDENT_ID_MIN = 10000;
    public static NON_RESIDENT_ID_MAX = 999999999999999;
    public static PIN_CODE_LENGTH = 4;
    public static OTP_NUMBER_LENGTH = 4;
    public static PIN_CODE_KEY = process.env.PIN_CODE_KEY || 'nwtPzEg:Ev:E_9U#$-AE">=.UVhdkLd`';
    public static MAXIMUM_SHIPMENT_TEMPLATES = 2;
    public static DATE_EN_US_FORMATE = 'en-US';

    // Redis
    public static REDIS_SERVICE_NAME = process.env.REDIS_SERVICE_NAME ? process.env.REDIS_SERVICE_NAME : 'Madar';
    public static REDIS_DATABASE_URL = process.env.REDIS_DATABASE_URL ? process.env.REDIS_DATABASE_URL : '';
    public static REDIS_PORT = process.env.REDIS_PORT ? process.env.REDIS_PORT : '6379';
    public static REDIS_TIMEOUT = process.env.REDIS_TIMEOUT ? process.env.REDIS_TIMEOUT : '5000';
    public static REDIS_KEY_USERS_TOKEN = 'Token#';

    // Auth Paths
    public static AUTH_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/auth`];
    public static AUTH_TAG = 'Auth';
    public static LOGIN_PATH = 'login';
    public static REGISTER_DEVICE_PATH = 'register-device';
    public static VERIFY_EMAIL = 'verify-email';
    public static REFRESH_ACCESS_TOKEN = 'refresh-access-token';
    public static VERIFY_MOBILE_NUMBER = 'verify-mobile-number';
    public static REQUEST_OTP = 'request-otp';
    public static RESET_PASSWORD = 'reset-password';

    // Customer Paths
    public static CUSTOMER_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/customer`];
    public static CUSTOMER_TAG = 'Customer Management';
    public static CUSTOMERS_PATH = 'customers';
    public static ACTIVE_CUSTOMERS_PATH = 'active-customers';
    public static CUSTOMER = 'customer';

    // Contract Paths
    public static CONTRACT_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/contract`];
    public static CONTRACT_TAG = 'Contract Management';
    public static MATCHED_FLEET_CONTRACT_PATH = 'matched';
    public static CONTRACTS_PATH = 'contracts';
    public static RELATED_CONTRACT = 'related-contract';

    // City Paths
    public static CITY_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/city`];
    public static CITY_TAG = 'City Management';
    public static CITIES_PATH = 'cities';
    public static ACTIVE_CITIES_PATH = 'active-cities';

    // Product Type Paths
    public static PRODUCT_TYPE_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/product-type`];
    public static PRODUCT_TYPE_TAG = 'Product Type Management';
    public static PRODUCT_TYPES_PATH = 'product-types';


    // Media Path
    public static MEDIA_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/media`];
    public static MEDIA_TAG = 'Media';

    // CRUD Paths
    public static ADD_PATH = 'add';
    public static UPDATE_PATH = 'update';
    public static BY_ID_PATH = '/:id';

    // User Paths
    public static USER_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/user`];
    public static USER_TAG = 'User Management';
    public static USERS_PATH = 'users';

    // Roles Paths
    public static ROLE_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/role`];
    public static ACTIVE_ROLES_PATH = 'active-roles';

    // Fleet Paths
    public static FLEET_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/fleet`];
    public static FLEET_TAG = 'Fleet Management';
    public static FLEETS_PATH = 'fleets';
    public static ACTIVE_FLEETS_PATH = 'active-fleets';
    public static FLEET = 'fleet';
    public static VERIFY_PATH = 'verify';


    // Truck path
    public static TRUCK_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/truck`];
    public static TRUCK_TAG = 'Truck Management';
    public static ACTIVE_TRUCKS_PATH = 'active-trucks';
    public static TRUCKS_PATH = 'trucks';

    // Truck Types Paths
    public static TRUCK_TYPE_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/truck-type`];
    public static TRUCK_TYPE_TAG = 'Truck Type Management';
    public static ACTIVE_TRUCK_TYPES_PATH = 'active-truck-types';

    // Brands Paths
    public static BRAND_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/brand`];
    public static BRAND_TAG = 'brands Management';
    public static BRANDS_PATH = 'brands';

    // Receiver Paths
    public static RECEIVER_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/receiver`];
    public static RECEIVER_TAG = 'Receiver Management';
    public static RECEIVERS_PATH = 'receivers';

    // Shipment Paths
    public static SHIPMENT_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/shipment`];
    public static SHIPMENT_TAG = 'Shipment Management';
    public static SHIPMENTS_PATH = 'shipments';
    public static SHIPMENT_ASSIGN_PATH = 'assign';
    public static SHIPMENT_STATUS_PATH = 'status';
    public static TEMPLATES_PATH = 'templates';
    public static USER_PERFORMANCE = 'user-performance';

    // Driver Paths
    public static DRIVER_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/driver`];
    public static DRIVER_TAG = 'Driver Management';
    public static ACTIVE_DRIVERS_PATH = 'active-drivers';
    public static DRIVERS_PATH = 'drivers';
    public static SEND_DRIVER_PASSWORD = 'send-password';
    public static DRIVER_SHIPMENTS = 'driver-shipments';
    public static DRIVER_WITH_TRUCK = 'driver-with-truck';

    // Elm Paths
    public static ELM_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/elm`];
    public static ELM_TAG = 'Elm Management';
    public static DRIVER = 'driver';
    public static VEHICLE = 'vehicle';
    public static ELM_DRIVER_ALIEN_URL = 'http://95.177.171.154:25678/api/DriverELM/GetDriver';
    public static ELM_DRIVER_OWNER_URL = 'http://95.177.171.154:25678/api/DriverELM/GetDriverWithOwner';
    public static ELM_DRIVER_CITIZEN_URL = 'http://95.177.171.154:25678/api/DriverELM/GetCitizen';
    public static ELM_VEHICLE_URL = 'http://95.177.171.154:25678/api/DriverELM/GetVehicle';

    // Sign up Paths
    public static SIGN_UP_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/sign-up`];
    public static SIGN_UP_TAG = 'Sign Up';

    // Lead up Paths
    public static LEAD_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/lead`];
    public static LEAD_TAG = 'Lead Management';
    public static LEAD = 'lead';
    public static LEADS_PATH = 'leads';

    // Dashboard Paths
    public static DASHBOARD_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/dashboard`];
    public static DASHBOARD_TAG = 'Dashboard Management';
    public static ORDER_STATUS_PATH = 'order-status';
    public static TOP_DRIVERS_PATH = 'top-drivers';
    public static OPERATION_PERFORMANCE_PATH = 'operation-performance';
    public static MADAR_PERFORMANCE_PATH = 'madar-performance';
    public static ORDER_FULFILLMENT_PATH = 'order-fulfillment';
    public static JOINED_FLEETS_AND_CUSTOMERS_COUNTS = 'joined-fleets-and-customers-counts';
    public static CONTRACTS_COUNTS = 'contracts-counts';
    public static DRIVERS_COUNTS = 'drivers-counts';
    public static TRUCKS_COUNTS = 'trucks-counts';

    // Shared Paths
    public static SHARED_PATH = [`${Constants.API_VERSION}/${Constants.API_PREFIX}/shared`];
    public static SHARED_TAG = 'Shared Management';
    public static COUNTRIES_PATH = 'countries';
    public static INSURANCE_COMPANY_PATH = 'insurance-companies';
    public static INSURANCE_COVER_PATH = 'insurance-covers';
    public static INVITATION_PATH = 'invitation';
    public static LOCATION_PATH = 'location';
    public static ACTIVE_LOCATIONS_PATH = 'active-locations';
    public static NOTIFICATIONS_PATH = 'notifications';
    public static UNREAD_NOTIFICATIONS_COUNT_PATH = 'unread-notifications-count';
    public static SEARCH_PATH = 'search';


    // Swagger
    public static API_TITLE = 'Madar API';
    public static API_DESCRIPTION = 'Madar API provide the easy way to integrate and handle madar business logic and model with hight quality and performance';
    public static API_TAG = 'Docs';
    public static API_AUTH_TYPE = 'http';
    public static API_AUTH_SCHEMA = 'bearer';
    public static API_AUTH_BEARER_FORMAT = 'JWT';
    public static API_AUTH_PATH = 'header';
    public static API_AUTH_NAME = 'Authorization';

    // Polygon Coordinates
    public static MIN_POLYGON_COORDINATE_SIZE = 3;
}
