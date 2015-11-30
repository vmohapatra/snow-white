// Schema for the image tags
// NOTE: 'Relaxing' and 'Sightseeing' NOT INCLUDED
// in schema, as they just added a bunch of noise

var mongoose = require('mongoose');

var imageTagsSchema = new mongoose.Schema({
	"image": { type : String },
	"WHERE_AFRICA": { type : Number },
	"WHERE_ASIA": { type : Number },
	"WHERE_AUSTRALIA_PACIFIC": { type : Number },
	"WHERE_CENTRAL_AMERICA": { type : Number },
	"WHERE_EUROPE": { type : Number },
	"WHERE_MEDITERRANEAN_SEA": { type : Number },
	"WHERE_MIDDLE_EAST": { type : Number },
	"WHERE_NORTH_AMERICA": { type : Number },
	"WHERE_SOUTH_AMERICA": { type : Number },
	"INSPIRE_BAR": { type : Number },
	"SETTINGS_BAR_NIGHTCLUB": { type : Number },
	"SETTINGS_BEACH": { type : Number },
	"SETTINGS_BIG_CITY": { type : Number },
	"INSPIRE_BOATING": { type : Number },
	"INSPIRE_BUNGEE_JUMPING": { type : Number },
	"INSPIRE_CAMPING": { type : Number },
	"INSPIRE_CANOEING": { type : Number },
	"WEATHER_COLD": { type : Number },
	"INSPIRE_CROSS_COUNTRY_SKIING": { type : Number },
	"SETTINGS_CROWDED": { type : Number },
	"SETTINGS_CRUISE_SHIP": { type : Number },
	"INSPIRE_DANCING": { type : Number },
	"SETTINGS_DESERT": { type : Number },
	"INSPIRE_DINING": { type : Number },
	"INSPIRE_DOWNHILL_MOUNTAIN_BIKING": { type : Number },
	"INSPIRE_DOWNHILL_SKIING": { type : Number },
	"INSPIRE_DRINKING_ALCOHOL": { type : Number },
	"WEATHER_DRY": { type : Number },
	"WEATHER_FOGGY": { type : Number },
	"SETTINGS_FOREST": { type : Number },
	"INSPIRE_GAMBLING_CASINO": { type : Number },
	"SETTINGS_GARDEN": { type : Number },
	"INSPIRE_GOING_TO_CONCERT": { type : Number },
	"INSPIRE_GOING_PLAY": { type : Number },
	"INSPIRE_GOING_TO_BALLET": { type : Number },
	"INSPIRE_GOING_TO_OPERA": { type : Number },
	"SETTINGS_GOLF_COURSE": { type : Number },
	"INSPIRE_GOLFING": { type : Number },
	"INSPIRE_HIKING": { type : Number },
	"SETTINGS_HILLY": { type : Number },
	"SETTINGS_HISTORIC_CITY": { type : Number },
	"SETTINGS_HISTORIC_LANDMARK": { type : Number },
	"INSPIRE_HORSEBACK_RIDING": { type : Number },
	"WEATHER_HUMID": { type : Number },
	"SETTINGS_HUT_CABANA": { type : Number },
	"SETTINGS_ISLANDS": { type : Number },
	"SETTINGS_JUNGLE": { type : Number },
	"INSPIRE_KITE_SURFING": { type : Number },
	"SETTINGS_LAKE": { type : Number },
	"SETTINGS_LODGE_CABIN": { type : Number },
	"SETTINGS_LUSH": { type : Number },
	"SETTINGS_LUXURY_HOTEL_RESORT": { type : Number },
	"WEATHER_MODERATE": { type : Number },
	"SETTINGS_MODERN_CITY": { type : Number },
	"SETTINGS_MONUMENT_STATUE": { type : Number },
	"SETTINGS_MOUNTAIN": { type : Number },
	"SETTINGS_MUSEUM": { type : Number },
	"INSPIRE_NIGHT_CLUB": { type : Number },
	"SETTINGS_OCEAN_SEA": { type : Number },
	"WEATHER_OVERCAST": { type : Number },
	"SETTINGS_PARK": { type : Number },
	"SETTINGS_PLACE_OF_WORSHIP": { type : Number },
	"SETTINGS_POOL": { type : Number },
	"INSPIRE_POOL_PARTY": { type : Number },
	"WEATHER_RAINY": { type : Number },
	"INSPIRE_RELAXING": { type : Number },
	"SETTINGS_RESTAURANT": { type : Number },
	"SETTINGS_RIVER": { type : Number },
	"INSPIRE_ROAD_TRAIL_BIKING": { type : Number },
	"INSPIRE_ROCK_CLIMBING": { type : Number },
	"SETTINGS_ROCKY": { type : Number },
	"SETTINGS_RUINS": { type : Number },
	"INSPIRE_SCUBA_DIVING": { type : Number },
	"INSPIRE_SEA_KAYAKING": { type : Number },
	"SETTINGS_SECLUDED": { type : Number },
	"INSPIRE_SHOPPING": { type : Number },
	"INSPIRE_SIGHTSEEING": { type : Number },
	"SETTINGS_SKI_RESORT": { type : Number },
	"INSPIRE_SKY_DIVING": { type : Number },
	"SETTINGS_SMALL_HOTEL": { type : Number },
	"SETTINGS_SMALL_TOWN_VILLAGE": { type : Number },
	"INSPIRE_SNORKELING": { type : Number },
	"INSPIRE_SNOWBOARDING": { type : Number },
	"INSPIRE_SNOWSHOEING": { type : Number },
	"WEATHER_SNOWY": { type : Number },
	"SETTINGS_SPA": { type : Number },
	"WEATHER_SUNNY": { type : Number },
	"INSPIRE_SURFING": { type : Number },
	"INSPIRE_SWIMMING": { type : Number },
	"SETTINGS_TENT": { type : Number },
	"SETTINGS_THEME_PARK": { type : Number },
	"WEATHER_TROPICAL": { type : Number },
	"SETTINGS_VINEYARDS": { type : Number },
	"INSPIRE_VISIT_SPA": { type : Number },
	"INSPIRE_VISIT_THEME_PARK": { type : Number },
	"INSPIRE_WATCHING_MOVIE": { type : Number },
	"SETTINGS_WATER_PARK": { type : Number },
	"SETTINGS_WATERFALL": { type : Number },
	"INSPIRE_WHITE_WATER_KAYKING": { type : Number },
	"INSPIRE_WHITE_WATER_RAFTING": { type : Number },
	"INSPIRE_WINDSURFING": { type : Number },
	"WEATHER_WINDY": { type : Number },
	"INSPIRE_ZIP_LINING": { type : Number },
	"SETTINGS_ZOO_AQUARIUM": { type : Number }
});

module.exports = mongoose.model('imageTags', imageTagsSchema);
