"use strict";

function Mission(
	id, name, time, exp, ship_exp, fuel, ammo, steel, bauxite, item1, item2,
	lv_ship, min_ship, required_ship, total_lv_ship, fuel_cost, ammo_cost, required_ex) {
	this.id = id;
	this.name = name;
	this.time = time;
	this.exp = exp;
	this.ship_exp = ship_exp;
	this.fuel = fuel;
	this.ammo = ammo;
	this.steel = steel;
	this.bauxite = bauxite;
	this.item1 = item1;
	this.item2 = item2;
	this.lv_ship = lv_ship;
	this.min_ship = min_ship;
	this.required_ship = required_ship;
	this.total_lv_ship = total_lv_ship;
	this.fuel_cost = fuel_cost;
	this.ammo_cost = ammo_cost;
	this.required_ex = required_ex;
}

function MissionArea(name, klass) {
	this.id = 0;
	this.name = name;
	this.klass = klass;
}

var missions = [
//	              (ID, 遠征名               , 時間   , EXP,艦EXP, 燃 , 弾 , 鋼 , ボ , アイテム(左)  , アイテム(右)  , Lv, 最低数, 必須艦, 合計Lv, 燃料, 弾薬, 必須要素)
	new MissionArea("鎮守府海域", "area1"),
	new Mission(1 , "練習航海"              , 15     , 10 , 10  , 0  , 30 , 0  , 0  , null          , null          , 1 , 2, [], 0, 3, 0),
	new Mission(2 , "長距離練習航海"        , 30     , 20 , 15  , 0  , 100, 30 , 0  , ["repair",1]  , null          , 2 , 4, [], 0, 5, 0),
	new Mission(3 , "警備任務"              , 20     , 30 , 30  , 30 , 30 , 40 , 0  , null          , null          , 3 , 3, [], 0, 3, 2),
	new Mission(4 , "対潜警戒任務"          , 50     , 30 , 40  , 0  , 60 , 0  , 0  , ["repair",1]  , ["box",1,"s"] , 3 , 3, [["軽",1],["駆",2]], 0, 5, 0),
	new Mission(5 , "海上護衛任務"          , 1*60+30, 40 , 40  , 200, 200, 20 , 20 , null          , null          , 3 , 4, [["軽",1],["駆",2]], 0, 5, 0),
	new Mission(6 , "防空射撃演習"          , 40     , 30 , 50  , 0  , 0  , 0  , 80 , ["box",1,"s"] , null          , 4 , 4, [], 0, 3, 2),
	new Mission(7 , "観艦式予行"            , 1*60   , 60 , 120 , 0  , 0  , 50 , 30 , ["build",1]   , null          , 5 , 6, [], 0, 5, 0),
	new Mission(8 , "観艦式"                , 3*60   , 120, 140 , 50 , 100, 50 , 50 , ["build",2]   , ["material",1], 6 , 6, [], 0, 5, 2),
	new MissionArea("南西諸島海域", "area2"),
	new Mission(9 , "タンカー護衛任務"      , 4*60   , 60 , 60  , 350, 0  , 0  , 0  , ["box",1,"s"] , ["repair",2]  , 3 , 4, [["軽",1],["駆",2]], 0, 5, 0),
	new Mission(10, "強行偵察任務"          , 1*60+30, 40 , 50  , 0  , 50 , 0  , 30 , ["repair",1]  , ["build",1]   , 3 , 3, [["軽",2]], 0, 3, 0),
	new Mission(11, "ボーキサイト輸送任務"  , 5*60   , 40 , 40  , 0  , 0  , 0  , 250, ["box",1,"s"] , ["repair",1]  , 6 , 4, [["駆",2]], 0, 5, 0),
	new Mission(12, "資源輸送任務"          , 8*60   , 60 , 50  , 50 , 250, 200, 50 , ["box",1,"m"] , ["material",1], 4 , 4, [["駆",2]], 0, 5, 0),
	new Mission(13, "鼠輸送作戦"            , 4*60   , 70 , 60  , 240, 300, 0  , 0  , ["repair",2]  , ["box",1,"s"] , 5 , 6, [["軽",1],["駆",4]], 0, 5, 4),
	new Mission(14, "包囲陸戦隊撤収作戦"    , 6*60   , 90 , 100 , 0  , 240, 200, 0  , ["repair",1]  , ["material",1], 6 , 6, [["軽",1],["駆",3]], 0, 5, 0),
	new Mission(15, "囮機動部隊支援作戦"    , 12*60  , 100, 160 , 0  , 0  , 300, 400, ["box",1,"l"] , ["material",1], 9 , 6, [["空母",2],["駆",2]], 0, 5, 4),
	new Mission(16, "艦隊決戦援護作戦"      , 15*60  , 120, 200 , 500, 500, 200, 200, ["build",2]   , ["material",2], 11, 6, [["軽",1],["駆",2]], 0, 5, 4),
	new MissionArea("北方海域", "area3"),
	new Mission(17, "敵地偵察作戦"          , 45     , 30 , 40  , 70 , 70 , 50 , 0  , null          , null          , 20, 6, [["軽",1],["駆",3]], 0, 3, 4),
	new Mission(18, "航空機輸送作戦"        , 5*60   , 60 , 60  , 0  , 0  , 300, 100, ["repair",1]  , null          , 15, 6, [["空母",3],["駆",2]], 0, 5, 2),
	new Mission(19, "北号作戦"              , 6*60   , 60 , 70  , 400, 0  , 50 , 30 , ["box",1,"s"] , ["material",1], 20, 6, [["航戦",2],["駆",2]], 0, 5, 4),
	new Mission(20, "潜水艦哨戒任務"        , 2*60   , 40 , 50  , 0  , 0  , 150, 0  , ["material",1], ["box",1,"s"] , 1 , 2, [["潜",1],["軽",1]], 0, 5, 4),
	new Mission(21, "北方鼠輸送作戦"        , 2*60+20, 45 , 55  , 320, 270, 0  , 0  , ["box",1,"s"] , null          , 15, 5, [["軽",1],["駆",4]], 30, 8, 7, ["ド3"]),
	new Mission(22, "艦隊演習"              , 3*60   , 45 , 400 , 0  , 10 , 0  , 0  , null          , null          , 30, 6, [["重",1],["軽",1],["駆",2]], 45, 8, 7),
	new Mission(23, "航空戦艦運用演習"      , 4*60   , 70 , 420 , 0  , 20 , 0  , 100, null          , null          , 50, 6, [["航戦",2],["駆",2]], 200, 8, 8),
	new Mission(24, "北方航路海上護衛"      , 8*60+20, 65 , 80  , 500, 0  , 0  , 150, ["material",2], ["repair",1]  , 50, 6, [["軽",1],["駆",4]], 200, 8, 6, ["旗艦:軽"]),
	new MissionArea("西方海域", "area4"),
	new Mission(25, "通商破壊作戦"          , 40*60  , 80 , 180 , 900, 0  , 500, 0  , null          , null          , 25, 4, [["重",2],["駆",2]], 0, 5, 8),
	new Mission(26, "敵母港空襲作戦"        , 80*60  , 150, 200 , 0  , 0  , 0  , 900, ["repair",3]  , null          , 30, 4, [["空母",1],["軽",1],["駆",2]], 0, 8, 8),
	new Mission(27, "潜水艦通商破壊作戦"    , 20*60  , 80 , 60  , 0  , 0  , 800, 0  , ["material",1], ["box",2,"s"] , 1 , 2, [["潜",2]], 0, 8, 8),
	new Mission(28, "西方海域封鎖作戦"      , 25*60  , 100, 140 , 0  , 0  , 900, 350, ["material",2], ["box",2,"m"] , 30, 3, [["潜",3]], 0, 8, 8),
	new Mission(29, "潜水艦派遣演習"        , 24*60  , 100, 100 , 0  , 0  , 0  , 100, ["material",1], ["box",1,"s"] , 50, 3, [["潜",3]], 0, 9, 4),
	new Mission(30, "潜水艦派遣作戦"        , 48*60  , 100, 150 , 0  , 0  , 0  , 100, ["material",3], null          , 55, 4, [["潜",4]], 0, 9, 7),
	new Mission(31, "海外艦との接触"        , 2*60   , 50 , 50  , 0  , 30 , 0  , 0  , ["box",1,"s"] , null          , 60, 4, [["潜",4]], 200, 5, 0),
	new Mission(32, "遠洋練習航海"          , 24*60  , 300, NaN , 50 , 50 , 50 , 50 , ["box",1,"l"] , ["material",3], 5 , 3, [["練",1],["駆",2]], 0, 9, 3, ["旗艦:練"]),
	new MissionArea("南方海域", "area5"),
	new Mission(35, "ＭＯ作戦"              , 7*60   , 100, 100 , 0  , 0  , 240, 280, ["box",2,"s"] , ["material",1], 40, 6, [["空母",2],["重",1],["駆",1]], 0, 8, 8),
	new Mission(36, "水上機基地建設"        , 9*60   , 100, 100 , 480, 0  , 200, 200, ["box",2,"m"] , ["repair",1]  , 30, 6, [["水母",2],["軽",1],["駆",1]], 0, 8, 8),
	new Mission(37, "東京急行"              , 2*60+45, 50 , 65  , 0  , 380, 270, 0  , ["box",1,"s"] , null          , 50, 6, [["軽",1],["駆",5]], 200, 8, 8, ["ド3計4"]),
	new Mission(38, "東京急行(弐)"          , 2*60+55, 50 , 70  , 420, 0  , 200, 0  , ["box",1,"s"] , null          , 65, 6, [["駆",5]], 240, 8, 8, ["ド4計8"]),
	new Mission(39, "遠洋潜水艦作戦"        , 30*60  , 130, 160 , 0  , 0  , 300, 0  , ["repair",2]  , ["box",1,"m"] , 3 , 5, [["潜母艦",1],["潜",4]], 180, 9, 9),
	new Mission(40, "水上機前線輸送"        , 6*60+50, 60 , 70  , 300, 300, 0  , 100, ["box",3,"s"] , ["repair",1]  , 25, 6, [["軽",1],["水母",2],["駆",2]], 150, 8, 7, ["旗艦:軽"])];

var box_map = {
	"s": {name: "小", value: 200},
	"m": {name: "中", value: 400},
	"l": {name: "大", value: 700}};

var cost_table = {
	standard: { //各艦種の中で最も多い
		"駆": [15, 20],
		"軽": [25, 25],
		"重": [40, 65],
		"空母": [35, 35],
		"航戦": [95, 105],
		"潜": [10, 20],
		"水母": [35, 35],
		"潜母艦": [35, 10],
		"練": [35, 20]}, // 香取改
	lowcost: {
		"駆": [15, 15], //睦月型
		"軽": [25, 20], //天龍型
		"重": [35, 50], //古鷹型・青葉型
		"空母": [35, 35], //龍驤型・祥鳳型・千歳型
		"航戦": [95, 105],
		"潜": [10, 20],
		"水母": [35, 35],
		"潜母艦": [35, 10],
		"練": [30, 15]}}; // 香取

var elements = {};
var state = {
	sortkey: null,
	sortelements: null,
	sorted: false};

function zeroPadding(num, width) {
	var str = num.toString();
	while (str.length < width) {
		str = "0" + str;
	}
	return str;
}

function formatTime(num) {
	var hour = Math.floor(num / 60);
	var min = num % 60;
	return hour + ":" + zeroPadding(min, 2);
}

function formatNumber(num, ndigits) {
	if (ndigits == null) ndigits = 0;
	if (num === 0) return ct("");
	if (isNaN(num)) return ct("?");
	
	var x = Math.pow(10, ndigits);
	var content = (Math.round(num * x) / x).toString();
	
	if (ndigits > 0) {
		var point = content.indexOf(".");
		if (point === -1) {
			content += ".";
			point = content.length - 1;
		}
		for (var i = content.length - 1 - point; i < ndigits; ++i) {
			content += "0";
		}
	}
	
	if (num < 0) {
		return ce("span", content, {klass: "negative-value"});
	} else {
		return ct(content);
	}
}

function sortBy(ary, fn) {
	var tmp = [];
	for (var i = 0; i < ary.length; ++i) {
		tmp.push({index: i, value: ary[i], key: fn(ary[i])});
	}
	tmp = tmp.sort(function(a, b){
		var aKey = isNaN(a.key) ? -1 : a.key;
		var bKey = isNaN(b.key) ? -1 : b.key;
		var n = aKey - bKey;
		return (n === 0) ? (a.index - b.index) : n;
	});
	
	var result = [];
	for (var i = 0; i < tmp.length; ++i) {
		if (i === 0 || tmp[i].key !== tmp[i - 1].key) {
			result.push([]);
		}
		result[result.length - 1].push(tmp[i].value);
	}
	return result;
}

function deepForEach(obj, fn) {
	if (Array.isArray(obj)) {
		obj.forEach(function(o){
			deepForEach(o, fn);
		});
	} else {
		fn(obj);
	}
}

function ct(content) { // create_text
	if (content != null && content.nodeType != null) {
		return content;
	} else {
		return document.createTextNode(content);
	}
}

function ce(name, contents, opts) { // create_element
	var element = document.createElement(name);
	if (opts) {
		if (opts.klass) element.className = opts.klass;
		if (opts.attr) {
			var attr_keys = Object.keys(opts.attr);
			for (var i = 0, len = attr_keys.length; i < len; ++i) {
				element.setAttribute(attr_keys[i], opts.attr[attr_keys[i]]);
			}
		}
	}
	if (contents != null) {
		deepForEach(contents, function(content){
			element.appendChild(ct(content));
		});
	}
	return element;
}

function replaceText(parent, contents) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
	deepForEach(contents, function(content){
		parent.appendChild(ct(content));
	});
}

function calcCost(type, fuel, ammo, num) {
	var c = cost_table[elements.select_type.value][type];
	return [
		Math.floor(c[0] / 10 * fuel) * num,
		Math.floor(c[1] / 10 * ammo) * num]
}

function calcCosts(list, shipnum, fuel, ammo) {
	var num = shipnum;
	var fuel_cost = 0;
	var ammo_cost = 0;
	
	list.forEach(function(t){
		var c = calcCost(t[0], fuel, ammo, t[1]);
		fuel_cost += c[0];
		ammo_cost += c[1];
		num -= t[1];
	});
	
	var c = calcCost("駆", fuel, ammo, num);
	fuel_cost += c[0];
	ammo_cost += c[1];
	
	return [fuel_cost, ammo_cost];
}

function loadState() {
	try {
		var src = localStorage.getItem("kancolle-mission-fields");
	} catch(ex) {
		return;
	}
	
	var data = src ? JSON.parse(src) : [];
	
	data.forEach(function(d){
		var field = document.getElementById(d[0]);
		if (field) {
			if (field.type === "checkbox") {
				field.checked = d[1];
			} else {
				field.value = d[1];
			}
		}
	});
}

function saveState() {
	var fields = [];
	Array.forEach(document.getElementsByTagName("input"), function(input){ fields.push(input); });
	Array.forEach(document.getElementsByTagName("select"), function(select){ fields.push(select); });
	
	var data = [];
	fields.forEach(function(field){
		if (field.hasAttribute("id")) {
			data.push([field.id, field.type === "checkbox" ? field.checked : field.value]);
		}
	});
	var src = JSON.stringify(data);
	
	try {
		localStorage.setItem("kancolle-mission-fields", src);
	} catch(ex) {
		return;
	}
}

function updateTable() {
	var datas = [];
	var min_shipnum = parseInt(elements.select_min_shipnum.value, 10);
	
	var greatsuccess_cost =
		elements.select_greatsuccess.value === "cost" ||
		elements.select_greatsuccess.value === "all";
	
	var greatsuccess_rate =
		elements.select_greatsuccess.value === "rate" ||
		elements.select_greatsuccess.value === "all";
	
	var expecteditem =
		elements.check_expecteditem.checked ||
		elements.check_hourly.checked;
	
	elements.rows.forEach(function(row){
		var ex = row.data;
		var num = ex.min_ship;
		
		if (elements.check_greatsuccess.checked) {
			num = Math.max(num, min_shipnum);
		}
		
		var c = calcCosts(ex.required_ship, num, ex.fuel_cost, ex.ammo_cost);
		var data = {
			row: row,
			exp: ex.exp,
			ship_exp: ex.ship_exp * 1.5,
			fuel: ex.fuel,
			ammo: ex.ammo,
			steel: ex.steel,
			bauxite: ex.bauxite,
			repair_item: "",
			repair_item_value: 0,
			build_item: "",
			build_item_value: 0,
			material_item: "",
			material_item_value: 0,
			box_item: "",
			box_item_value: 0,
			fuel_cost: c[0],
			ammo_cost: c[1]};
		
		[ex.item1, ex.item2].forEach(function(item, index){
			if (!item) return;
			
			var x = (index === 0) ? 1 : 2;
			var e = 0;
			for (var i = 0; i < item[1]; ++i) {
				x /= 2;
				e += i * x;
			}
			e += item[1] * x;
			if (item[0] === "box") e *= box_map[item[2]].value;
			
			if (index !== 0 && greatsuccess_rate && elements.check_real.checked) {
				e *= Math.min(0.2 + Math.max(ex.min_ship, min_shipnum) * 0.15, 1);
			}
			if (elements.check_hourly.checked) {
				e /= ex.time / 60;
			}
			
			if (index !== 0 && !elements.check_greatsuccess.checked) {
				data[item[0] + "_item_value"] = 0;
			} else {
				data[item[0] + "_item_value"] = e;
			}
			
			var content;
			if (expecteditem) {
				if (item[0] === "box") {
					content = [formatNumber(e), "枚"];
				} else {
					content = formatNumber(e, 2);
				}
			} else {
				content = "0~" + item[1];
				if (item[0] === "box") content = box_map[item[2]].name + content;
			}
			if (index === 0) content = ce("strong", content);
			if (index !== 0 && !elements.check_greatsuccess.checked) {
				content = ce("span", content, {klass: "disable-value"});
			}
			data[item[0] + "_item"] = content;
		});
		
		if (elements.check_greatsuccess.checked) {
			var rate = 1;
			if (greatsuccess_rate && elements.check_real.checked) {
				rate = Math.min(0.2 + num * 0.15, 1);
			}
			data.exp *= 2 * rate;
			data.ship_exp *= 2 * rate;
			data.fuel *= 1.5 * rate;
			data.ammo *= 1.5 * rate;
			data.steel *= 1.5 * rate;
			data.bauxite *= 1.5 * rate;
		}
		if (elements.check_real.checked) {
			data.fuel -= data.fuel_cost;
			data.ammo -= data.ammo_cost;
			if (greatsuccess_cost && elements.check_greatsuccess.checked) {
				var c = calcCosts(ex.required_ship, num, 4 / (12/3), 4 / (12/3));
				data.fuel -= c[0];
				data.ammo -= c[1];
			}
		}
		if (elements.check_hourly.checked) {
			var h = ex.time / 60;
			data.exp /= h;
			data.ship_exp /= h;
			data.fuel /= h;
			data.ammo /= h;
			data.steel /= h;
			data.bauxite /= h;
			data.fuel_cost /= h;
			data.ammo_cost /= h;
		}
		
		datas.push(data);
	});
	
	var sortkey = state.sortkey;
	if (sortkey) {
		var sortex = false;
		var sortreverse = true;
		if (sortkey[0] === "@") { sortex = true; sortkey = sortkey.slice(1); }
		if (sortkey[0] === "-") { sortreverse = false; sortkey = sortkey.slice(1); }
		
		elements.area_trs.forEach(function(tr){
			var parent = tr.parentNode;
			if (parent) parent.removeChild(tr);
		});
		
		sortBy(datas, function(d){
			var value = (sortex ? d.row.data : d)[sortkey];
			return sortreverse ? -value : value;
		}).forEach(function(ds){
			ds.forEach(function(d){
				elements.exbody.appendChild(d.row.tr);
			});
		});
		
		state.sorted = true;
	} else if (state.sorted) {
		elements.trs.forEach(function(tr){
			elements.exbody.appendChild(tr);
		});
		
		state.sorted = false;
	}
	
	var datakeys = ["exp", "ship_exp", "fuel", "ammo", "steel", "bauxite"];
	if (expecteditem) {
		datakeys.push("repair_item_value", "build_item_value", "material_item_value", "box_item_value");
	}
	datakeys.forEach(function(key){
		var sorted = sortBy(datas, function(d){ return -d[key]; });
		var count = 0;
		
		key = key.replace(/_value$/, "");
		
		sorted.forEach(function(ds){
			ds.forEach(function(d){
				if (typeof d[key] === "number") d[key] = formatNumber(d[key]);
				if (count < 3) d[key] = ce("span", d[key],
					{klass: count === 0 ? "first-value" : "second-value"});
			});
			count += ds.length;
		});
	});
	
	datas.forEach(function(data){
		var row = data.row;
		
		replaceText(row.exp, data.exp);
		replaceText(row.ship_exp, data.ship_exp);
		replaceText(row.fuel, data.fuel);
		replaceText(row.ammo, data.ammo);
		replaceText(row.steel, data.steel);
		replaceText(row.bauxite, data.bauxite);
		
		replaceText(row.repair_item, data.repair_item);
		replaceText(row.build_item, data.build_item);
		replaceText(row.material_item, data.material_item);
		replaceText(row.box_item, data.box_item);
		
		replaceText(row.fuel_cost, formatNumber(data.fuel_cost));
		replaceText(row.ammo_cost, formatNumber(data.ammo_cost));
	});
}

function initTable(event) {
	window.removeEventListener("DOMContentLoaded", initTable, false);
	
	var rows = [];
	var area_trs = [];
	var trs = [];
	
	var exbody = document.createElement("tbody");
	var exfoot = document.getElementById("mission-footer");
	exfoot.parentNode.insertBefore(exbody, exfoot);
	
	var area_data = null;
	missions.forEach(function(ex){
		if (ex.id === 0) {
			area_data = ex;
			var tr = ce("tr", [ce("th", ex.name, {klass: ex.klass, attr: {colspan: 21}})]);
			
			area_trs.push(tr);
			trs.push(tr);
			exbody.appendChild(tr);
		} else {
			var row = {
				data: ex,
				tr: null,
				exp: ce("td", 0, {klass: "exp"}),
				ship_exp: ce("td", 0, {klass: "exp"}),
				fuel: ce("td", 0, {klass: "fuel"}),
				ammo: ce("td", 0, {klass: "ammo"}),
				steel: ce("td", 0, {klass: "steel"}),
				bauxite: ce("td", 0, {klass: "bauxite"}),
				repair_item: ce("td", 0),
				build_item: ce("td", 0),
				material_item: ce("td", 0),
				box_item: ce("td", 0),
				fuel_cost: ce("td", 0),
				ammo_cost: ce("td", 0)};
			rows.push(row);
			
			var tmp = [];
			ex.required_ship.forEach(function(t){
				tmp.push(t.join(""));
			});
			var required_types = [tmp.join(" ")];
			if (ex.required_ex) {
				required_types.push(" (" + ex.required_ex.join(" ") + ")");
			}
			
			var time_str = formatTime(ex.time);
			if (ex.time >= 12*60) time_str = ce("strong", time_str);
			
			row.tr = ce("tr", [
				ce("td", ex.id, {klass: area_data.klass}),
				ce("td", ce("a", ex.name, {attr: {href: "http://wikiwiki.jp/kancolle/?%B1%F3%C0%AC#id" + zeroPadding(ex.id, 2)}}), {klass: "name"}),
				ce("td", time_str),
				ce("td", ex.lv_ship),
				ce("td", ex.min_ship + "隻", {klass: "min_ship"}),
				ce("td", required_types, {klass: "required_types"}),
				ce("td", formatNumber(ex.total_lv_ship)),
				row.exp,
				row.ship_exp,
				row.fuel,
				row.ammo,
				row.steel,
				row.bauxite,
				row.repair_item,
				row.build_item,
				row.material_item,
				row.box_item,
				row.fuel_cost,
				row.ammo_cost,
				ce("td", formatNumber(ex.fuel_cost / 10, 1)),
				ce("td", formatNumber(ex.ammo_cost / 10, 1))]);
			
			trs.push(row.tr);
			exbody.appendChild(row.tr);
		}
	});
	
	elements.exbody = exbody;
	elements.rows = rows;
	elements.area_trs = area_trs;
	elements.trs = trs;
	elements.check_hourly = document.getElementById("check-hourly");
	elements.check_real = document.getElementById("check-real");
	elements.check_greatsuccess = document.getElementById("check-greatsuccess");
	elements.check_expecteditem = document.getElementById("check-expecteditem");
	elements.select_type = document.getElementById("select-type");
	elements.select_greatsuccess = document.getElementById("select-greatsuccess");
	elements.select_min_shipnum = document.getElementById("select-min-shipnum");
	
	loadState();
	updateTable();
	
	Array.forEach(document.getElementsByTagName("input"), function(field){
		if (field.hasAttribute("id")) {
			field.addEventListener("click", function(e){
				saveState();
				updateTable();
			}, false);
		}
	});
	
	Array.forEach(document.getElementsByTagName("select"), function(select){
		if (select.hasAttribute("id")) {
			select.addEventListener("change", function(e){
				saveState();
				updateTable();
			}, false);
		}
	});
	
	var sortkey_table = {};
	Array.forEach(document.getElementsByTagName("th"), function(th){
		var sortkey = th.getAttribute("data-sortkey");
		if (sortkey === null) return;
		
		if (!sortkey_table[sortkey]) sortkey_table[sortkey] = [];
		sortkey_table[sortkey].push(th);
		
		th.addEventListener("click", function(e){
			if (state.sortelements) {
				state.sortelements.forEach(function(e){ e.removeAttribute("data-sorted"); });
			}
			
			if (sortkey === "" || state.sortkey === sortkey) {
				state.sortkey = null;
			} else {
				state.sortkey = sortkey;
				state.sortelements = sortkey_table[sortkey];
				state.sortelements.forEach(function(e){ e.setAttribute("data-sorted", "true"); });
			}
			
			updateTable();
		}, false);
	});
}

window.addEventListener("DOMContentLoaded", initTable, false);
