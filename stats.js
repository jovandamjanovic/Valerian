var character = {
    stats: [{
        name: "WS",
        value: 45
    }, {
        name: "BS",
        value: 25
    }, {
        name: "S",
        value: 25
    }, {
        name: "T",
        value: 25
    }, {
        name: "Ag",
        value: 50,
        unnatural: 6
    }, {
        name: "Int",
        value: 42
    }, {
        name: "Per",
        value: 35,
        unnatural: 6
    }, {
        name: "WP",
        value: 41,
        unnatural: 6
    }, {
        name: "Fel",
        value: 70,
        unnatural: 2
    }, {
        name: "Inf",
        value: 98
    }, {
        name: "Cor",
        value: 19
    }],
    armour: {
        body: 7,
        arms: 7,
        head: 2,
        legs: 2,
        forceField: {
            rating: 50,
            overload: 1
        }
    },
    wounds: 13,
    Movement: "11/33/33/132"
};

var charTable = document.createElement("table");
charTable.id = "characteristics";



< div id = "stats" >
    < table id = "characteristics" >
    < tr >
    < th > WS < /th>
			<th>BS</th >
    < th > S < /th>
			<th>T</th >
    < th > Ag < /th>
			<th>Int</th >
    < th > Per < /th>
			<th>WP</th >
    < th > Fel < /th>
			<th>Inf</th >
    < th > Cor < /th>
		</tr >
    < tr >
    < td class = "relativeDiv" >
    < div class = "left" > 4 < /div>
				<div class="right">5</div >
    < /td>
			<td class="relativeDiv">
				<div class="left">2</div >
    < div class = "right" > 5 < /div>
			</td >
    < td class = "relativeDiv" >
    < div class = "left" > 2 < /div>
				<div class="right">5</div >
    < /td>
			<td class="relativeDiv">
				<div class="left">2</div >
    < div class = "right" > 5 < /div>
			</td >
    < td class = "relativeDiv" >
    < div class = "left" >
    < div class = "unnaturalCharacteristic" > 11 < /div>
				5</div >
    < div class = "right" > 0 < /div>
			</td >
    < td class = "relativeDiv" >
    < div class = "left" > 4 < /div>
				<div class="right">2</div >
    < /td>
			<td class="relativeDiv">
				<div class="left">
					<div class="unnaturalCharacteristic">9</div >
    3 < /div>
				<div class="right">5</div >
    < /td>
			<td class="relativeDiv">
				<div class="left">
					<div class="unnaturalCharacteristic">10</div >
    4 < /div>
				<div class="right">1</div >
    < /td>
			<td class="relativeDiv">
				<div class="left">
					<div class="unnaturalCharacteristic">9</div >
    7 < /div>
				<div class="right">0</div >
    < /td>
			<td class="relativeDiv">
				<div class="left">9</div >
    < div class = "right" > 8 < /div>
			</td >
    < td class = "relativeDiv" >
    < div class = "left" > 1 < /div>
				<div class="right">9</div >
    < /td>
		</tr >
    < /table>
	<table id="smallStats">
		<tr>
			<td><b>Armour:</b > Body and Arms 7(2), Head and Legs 2(2) < /td>
			<td><b>Fatigue:</b > 2 / 2 < /td>
			<td><b>FF</b > 50(1) < /td>
			<td><b>Wounds:</b > 13 / 13 < /td>
		</tr >
    < /table>
	<b>Movement:</b > 11 / 33 / 33 / 132 < /div>