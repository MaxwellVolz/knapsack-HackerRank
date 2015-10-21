// Knapsack Exercise - HackerRank
//
//
// Oct 20th, '15
//
// max volz


var knapper = {
	closestMatch: 0,
	target: 0,
	addEm: function(nums){
		nums.forEach(function(num){
			knapper.sumCheck(num);
			nums.forEach(function(num2){
				knapper.sumCheck(parseInt(num) + parseInt(num2));
				console.log("num: " + num + " num2: " + num2);
			});
		});
	},
	sumCheck: function(newMatch){
		if(newMatch > knapper.target){
			return;
		}
		else if(newMatch == knapper.target){
			knapper.closestMatch = newMatch;
		}
		else if(newMatch > knapper.closestMatch){
			knapper.closestMatch = newMatch;
		}
	},
	initValues: function(input){
		var x = input.split('\n')[0].split(' ')[1];
		knapper.target = x;

		var y = input.split('\n')[1].split(' ');
		knapper.addEm(y);
		
		console.log("Best Match: " + knapper.closestMatch);
	}

};

knapper.initValues("3 13\n6 13 1");
