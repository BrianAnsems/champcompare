var PageManager = {
			
			init: function(){
				this.updateChamp();
			},
			updateChamp: function(champNameP)
			{
				instance=this;
				$('.lookup').click(function(e)			
				{
					e.preventDefault();
					var champ_url = "https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/?api_key=46044788-14da-4a21-9953-0ebb15ac336d";
					var champ_stat = "https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=stats&api_key=46044788-14da-4a21-9953-0ebb15ac336d";

					$.ajax({
						url: champ_url, 
						dataType: 'JSON',
						
						success: function(dataP){
							console.log("First Champ Nmae and pic next...");
							var champLink = document.getElementById("champID").value.toLowerCase();
							champSearch= document.getElementById("champID").value.toLowerCase();
							if(champSearch=="jarvan iv"){
								champSearch="Jarvan IV";
							}
							if(champSearch=="cho gath"){
								champSearch="chogath";
							}
							if(champSearch=="kha zix"){
								champSearch="khazix";
							}
							if(champSearch=="vel koz"){
								champSearch="velkoz";
							}
							if(champSearch=="wukong" || champSearch=="wu kong"){
								champSearch="monkey king";
								champLink=champSearch.replace(" ","");
							}
							
							champSearch= champSearch.replace(/\b./g, function(m){ return m.toUpperCase(); });
							champSearch= champSearch.replace(" ","");
							champLink= champLink.replace(" ", "");
							
							if(champSearch!='')
							{
								if(dataP.data[champSearch] == undefined)
								{
									$('#champ').html('Not Found...noob');
		        					$('#title').html("");
								}
							

								else
								{
									$('#champ').html(dataP.data[champSearch].name);
									$('#champ').attr('href', 'http://gameinfo.na.leagueoflegends.com/en/game-info/champions/' + champLink);
									$('#title').html(dataP.data[champSearch].title);
									$('#champImage').attr("src", 'http://ddragon.leagueoflegends.com/cdn/4.21.5/img/champion/'+dataP.data[champSearch].key+'.png');
								}
							}
							console.log("Second champ name and pic next...");
							var champLink2 = document.getElementById("champID2").value.toLowerCase();
							champSearch2= document.getElementById("champID2").value.toLowerCase();
							if(champSearch2=="jarvan iv"){
								champSearch2="Jarvan IV";
							}
							if(champSearch2=="cho gath"){
								champSearch2="chogath";
							}
							if(champSearch2=="kha zix"){
								champSearch2="khazix";
							}
							if(champSearch2=="vel koz"){
								champSearch2="velkoz";
							}
							if(champSearch2=="wukong" || champSearch2=="wu kong"){
								champSearch2="monkey king";
								champLink2=champSearch2.replace(" ","");
							}
							
							champSearch2= champSearch2.replace(/\b./g, function(m){ return m.toUpperCase(); });
							champSearch2= champSearch2.replace(" ","");
							champLink2= champLink2.replace(" ", "");
							
							console.log(dataP.data[champSearch2]);
							if(champSearch2!="")
							{
								if(dataP.data[champSearch2] == undefined)
								{
									$('#champ2').html('Not Found...noob');
		        					$('#title2').html("");
								}
								else
								{
									$('#champ2').html(dataP.data[champSearch2].name);
									$('#champ2').attr('href', 'http://gameinfo.na.leagueoflegends.com/en/game-info/champions/' + champLink2);
									$('#title2').html(dataP.data[champSearch2].title);
									$('#champImage2').attr("src", 'http://ddragon.leagueoflegends.com/cdn/4.21.5/img/champion/'+dataP.data[champSearch2].key+'.png');
								}
							}
						},
						error: function(data) {
	        				$('#champ2').html('Not Found...noob');
	        				$('#title2').html("");
	    				},
							
					});
					$.ajax({
						url: champ_stat,
						dataType:'JSON',

						success: function(dataS){

							console.log(dataS);
							var champLink = document.getElementById("champID").value.toLowerCase();
							champSearch= document.getElementById("champID").value.toLowerCase();
							if(champSearch=="jarvan iv"){
								champSearch="Jarvan IV";
							}
							if(champSearch=="cho gath"){
								champSearch="chogath";
							}
							if(champSearch=="kha zix"){
								champSearch="khazix";
							}
							if(champSearch=="vel koz"){
								champSearch="velkoz";
							}
							if(champSearch=="wukong" || champSearch=="wu kong"){
								champSearch="monkey king";
								champLink=champSearch.replace(" ","");
							}
							
							champSearch= champSearch.replace(/\b./g, function(m){ return m.toUpperCase(); });
							champSearch= champSearch.replace(" ","");
							champLink= champLink.replace(" ", "");

							var champLink2 = document.getElementById("champID2").value.toLowerCase();
							champSearch2= document.getElementById("champID2").value.toLowerCase();
							if(champSearch2=="jarvan iv"){
								champSearch2="Jarvan IV";
							}
							if(champSearch2=="cho gath"){
								champSearch2="chogath";
							}
							if(champSearch2=="kha zix"){
								champSearch2="khazix";
							}
							if(champSearch2=="vel koz"){
								champSearch2="velkoz";
							}
							if(champSearch2=="wukong" || champSearch2=="wu kong"){
								champSearch2="monkey king";
								champLink2=champSearch2.replace(" ","");
							}
							
							champSearch2= champSearch2.replace(/\b./g, function(m){ return m.toUpperCase(); });
							champSearch2= champSearch2.replace(" ","");
							champLink2= champLink2.replace(" ", "");

							//Variables of First Champ Stats

							if(champSearch!="")
							{
								var attackrange = dataS.data[champSearch].stats["attackrange"];
								var mpperlevel = dataS.data[champSearch].stats["mpperlevel"];
								var mp = dataS.data[champSearch].stats["mp"];
								var attackdamage = dataS.data[champSearch].stats["attackdamage"];
								var hp = dataS.data[champSearch].stats["hp"];
								var hpperlevel = dataS.data[champSearch].stats["hpperlevel"];
								var attackdamageperlevel = dataS.data[champSearch].stats["attackdamageperlevel"];
								var armor = dataS.data[champSearch].stats["armor"];
								var mpregenperlevel = dataS.data[champSearch].stats["mpregenperlevel"];
								var hpregen = dataS.data[champSearch].stats["hpregen"];
								var critperlevel = dataS.data[champSearch].stats["critperlevel"];
								var spellblockperlevel = dataS.data[champSearch].stats["spellblockperlevel"];
								var mpregen = dataS.data[champSearch].stats["mpregen"];
								var attackspeedperlevel = dataS.data[champSearch].stats["attackspeedperlevel"];
								var spellblock = dataS.data[champSearch].stats["spellblock"];
								var movespeed = dataS.data[champSearch].stats["movespeed"];
								var attackspeedoffset = dataS.data[champSearch].stats["attackspeedoffset"];
								var crit = dataS.data[champSearch].stats["crit"];
								var hpregenperlevel = dataS.data[champSearch].stats["hpregenperlevel"];
								var armorperlevel = dataS.data[champSearch].stats["armorperlevel"];
							}

							var firstChampStats  = [attackrange, mpperlevel, mp, attackdamage, hp, hpperlevel, attackdamageperlevel, armor, 
							mpregenperlevel, hpregen,critperlevel, spellblockperlevel, mpregen, attackspeedperlevel, spellblock, 
							movespeed, attackspeedoffset, crit, hpregenperlevel, armorperlevel];


							//Champ Stat Table


								$('#attackrange').html(attackrange);
								$('#mpperlevel').html(mpperlevel);
								$('#mp').html(mp);
								$('#attackdamage').html(attackdamage);
								$('#hp').html(hp);
								$('#hpperlevel').html(hpperlevel);
								$('#attackdamageperlevel').html(attackdamageperlevel);
								$('#armor').html(armor);
								$('#mpregenperlevel').html(mpregenperlevel);
								$('#hpregen').html(hpregen);
								$('#critperlevel').html(critperlevel);
								$('#spellblockperlevel').html(spellblockperlevel);
								$('#mpregen').html(mpregen);
								$('#attackspeedperlevel').html(attackspeedperlevel);
								$('#spellblock').html(spellblock);
								$('#movespeed').html(movespeed);
								$('#attackspeedoffset').html(attackspeedoffset);
								$('#crit').html(crit);
								$('#hpregenperlevel').html(hpregenperlevel);
								$('#armorperlevel').html(armorperlevel);
								
								if(champSearch!="")
								{
									$('#champOneStats').html(champSearch+"'s Stats");
								}

							var champStatIds = ['#attackrange','#mpperlevel','#mp','#attackdamage','#hp','#hpperlevel', '#attackdamageperlevel','#armor',
							'#mpregenperlevel','#hpregen','#critperlevel','#spellblockperlevel', '#mpregen', '#attackspeedperlevel','#spellblock','#movespeed',
							'#attackspeedoffset','#crit','#hpregenperlevel','#armorperlevel'];


							if(champSearch2!='')
							{
							var attackrange2 = dataS.data[champSearch2].stats["attackrange"];
							var mpperlevel2 = dataS.data[champSearch2].stats["mpperlevel"];
							var mp2 = dataS.data[champSearch2].stats["mp"];
							var attackdamage2 = dataS.data[champSearch2].stats["attackdamage"];
							var hp2 = dataS.data[champSearch2].stats["hp"];
							var hpperlevel2 = dataS.data[champSearch2].stats["hpperlevel"];
							var attackdamageperlevel2 = dataS.data[champSearch2].stats["attackdamageperlevel"];
							var armor2 = dataS.data[champSearch2].stats["armor"];
							var mpregenperlevel2 = dataS.data[champSearch2].stats["mpregenperlevel"];
							var hpregen2 = dataS.data[champSearch2].stats["hpregen"];
							var critperlevel2 = dataS.data[champSearch2].stats["critperlevel"];
							var spellblockperlevel2 = dataS.data[champSearch2].stats["spellblockperlevel"];
							var mpregen2 = dataS.data[champSearch2].stats["mpregen"];
							var attackspeedperlevel2 = dataS.data[champSearch2].stats["attackspeedperlevel"];
							var spellblock2 = dataS.data[champSearch2].stats["spellblock"];
							var movespeed2 = dataS.data[champSearch2].stats["movespeed"];
							var attackspeedoffset2 = dataS.data[champSearch2].stats["attackspeedoffset"];
							var crit2 = dataS.data[champSearch2].stats["crit"];
							var hpregenperlevel2 = dataS.data[champSearch2].stats["hpregenperlevel"];
							var armorperlevel2 = dataS.data[champSearch2].stats["armorperlevel"];
							}
							var secondChampStats  = [attackrange2, 
													mpperlevel2,
													mp2,
													attackdamage2, 
													hp2, 
													hpperlevel2, 
													attackdamageperlevel2, 
													armor2, 
													mpregenperlevel2, 
													hpregen2, 
													critperlevel2,
													spellblockperlevel2, 
													mpregen2, 
													attackspeedperlevel2, 
													spellblock2, 
													movespeed2,
													attackspeedoffset2, 
													crit2, 
													hpregenperlevel2, 
													armorperlevel2];

							//Champ Stat Table
							
								$('#attackrange2').html(attackrange2);
								$('#mpperlevel2').html(mpperlevel2);
								$('#mp2').html(mp2);
								$('#attackdamage2').html(attackdamage2);
								$('#hp2').html(hp2);
								$('#hpperlevel2').html(hpperlevel2);
								$('#attackdamageperlevel2').html(attackdamageperlevel2);
								$('#armor2').html(armor2);
								$('#mpregenperlevel2').html(mpregenperlevel2);
								$('#hpregen2').html(hpregen2);
								$('#critperlevel2').html(critperlevel2);
								$('#spellblockperlevel2').html(spellblockperlevel2);
								$('#mpregen2').html(mpregen2);
								$('#attackspeedperlevel2').html(attackspeedperlevel2);
								$('#spellblock2').html(spellblock2);
								$('#movespeed2').html(movespeed2);
								$('#attackspeedoffset2').html(attackspeedoffset2);
								$('#crit2').html(crit2);
								$('#hpregenperlevel2').html(hpregenperlevel2);
								$('#armorperlevel2').html(armorperlevel2);
								
								if(champSearch2!="")
								{
									$('#champTwoStats').html(champSearch2+"'s Stats");
							}


							//Variables of Second Champ Stats

							var attackrange2 = $('#attackrange2').text();
							var mpperlevel2 = $('#mpperlevel2').text();
							var mp2 = $('#mp2').text();
							var attackdamage2 = $('#attackdamage2').text();
							var hp2= $('#hp2').text();
							var hpperlevel2= $('#hpperlevel2').text();
							var attackdamageperlevel2= $('#attackdamageperlevel2').text();
							var armor2= $('#armor2').text();
							var mpregenperlevel2= $('#mpregenperlevel2').text();
							var hpregen2= $('#hpregen2').text();
							var critperlevel2= $('#critperlevel2').text();
							var spellblockperlevel2= $('#spellblockperlevel2').text();
							var mpregen2= $('#mpregen2').text();
							var attackspeedperlevel2= $('#attackspeedperlevel2').text();
							var spellblock2= $('#spellblock2').text();
							var movespeed2= $('#movespeed2').text();
							var attackspeedoffset2= $('#attackspeedoffset2').text();
							var crit2= $('#crit2').text();
							var hpregenperlevel2= $('#hpregenperlevel2').text();
							var armorperlevel2= $('#armorperlevel2').text();

							var secondChampStats = [attackrange2, mpperlevel2, mp2, attackdamage2, hp2, hpperlevel2, attackdamageperlevel2, armor2,
							mpregenperlevel2, hpregen2,critperlevel2, spellblockperlevel2, mpregen2, attackspeedperlevel2, spellblock2, movespeed2, attackspeedoffset2, crit2, hpregenperlevel2, armorperlevel2];
							
							var secondChampStatIds = ['#attackrange2',
							'#mpperlevel2',
							'#mp2',
							'#attackdamage2',
							'#hp2',
							'#hpperlevel2',
							'#attackdamageperlevel2',
							'#armor2',
							'#mpregenperlevel2',
							'#hpregen2',
							'#critperlevel2',
							'#spellblockperlevel2',
							'#mpregen2',
							'#attackspeedperlevel2',
							'#spellblock2',
							'#movespeed2',
							'#attackspeedoffset2',
							'#crit2',
							'#hpregenperlevel2',
							'#armorperlevel2'];

							//Stat Difference Table

							var champStatDifference = ['#attackrangeDifference',
							'#mpperlevelDifference',
							'#mpDifference',
							'#attackdamageDifference',
							'#hpDifference',
							'#hpperlevelDifference',
							'#attackdamageperlevelDifference',
							'#armorDifference',
							'#mpregenperlevelDifference',
							'#hpregenDifference',
							'#critperlevelDifference',
							'#spellblockperlevelDifference',
							'#mpregenDifference',
							'#attackspeedperlevelDifference',
							'#spellblockDifference',
							'#movespeedDifference',
							'#attackspeedoffsetDifference',
							'#critDifference',
							'#hpregenperlevelDifference',
							'#armorperlevelDifference'];

							
							for(var d=champStatDifference.length;d>=0; d--)
							{
								if(firstChampStats[d]==undefined)
								{
									firstChampStats[d]=0;
								}
								$(champStatDifference[d]).html(Math.abs(Math.round((firstChampStats[d]-secondChampStats[d])*100)/100));
							}

							//Highlight the Highest Stat

							for(var i=0;i<firstChampStats.length; i++)
							{
								if(firstChampStats[i]>secondChampStats[i])
								{
									console.log("yup");
									$(champStatIds[i]).css('font-weight',"bold");
									$(secondChampStatIds[i]).css('font-weight','normal');
								}
								if(firstChampStats[i]==secondChampStats[i])
								{
									$(champStatIds[i]).css('font-weight','normal');
									$(secondChampStatIds[i]).css('font-weight','normal');
								}
								if(firstChampStats[i]<secondChampStats[i])
								{
									$(champStatIds[i]).css('font-weight','normal');
									$(secondChampStatIds[i]).css('font-weight','bold');
								}
							}
						}
					});

				});
				
			}
		}
		PageManager.init();


		