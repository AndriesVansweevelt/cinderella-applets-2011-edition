function gup( name )
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "";
	else
		return results[1];
}

function showInfo()
{
document.getElementById("info").style.display="inline";
document.getElementById("applet").style.display="none";
}

function showApplet()
{
document.getElementById("info").style.display="none";
document.getElementById("applet").style.display="inline";
}



function titlename( name )
{
   if(name=="A1_de") return "<b>Spiegelungen:</b> Mathematischer Klappspiegel";     
   if(name=="A2_de") return "<b>Spiegelungen:</b> Physikalischer Klappspiegel";    
   if(name=="A3_de") return "<b>Spiegelungen:</b> Kaleidoskop";     
   if(name=="A4_de") return "<b>Spiegelungen:</b> Ornamente";     

   if(name=="B1_de") return "<b>Drehstreckungen:</b> Rotationssymmetrie";     
   if(name=="B2_de") return "<b>Drehstreckungen:</b> Aneinanderlegen von Polygonen";     
   if(name=="B3_de") return "<b>Drehstreckungen:</b> Iterierte Drehstreckungen";     
   if(name=="B4_de") return "<b>Drehstreckungen:</b> Iteration zweier Drehstreckungen";     

   if(name=="C1_de") return "<b>K%26ouml%3Brper:</b> Platonische%20K%26ouml%3Brper";     
   if(name=="C2_de") return "<b>K%26ouml%3Brper:</b> Archimedische%20K%26ouml%3Brper";     
   if(name=="C3_de") return "<b>K%26ouml%3Brper:</b> Platonische K%26ouml%3Brper schachteln";     
   if(name=="C4_de") return "<b>K%26ouml%3Brper:</b> K%C3%B6rper%20morphen";     

   if(name=="D1_de") return "<b>Packungen:</b> Raumf%26uuml%3Bllende Polyeder";     
   if(name=="D2_de") return "<b>Packungen:</b> Sierpinski-Tetraeder";     
   if(name=="D3_de") return "<b>Packungen:</b> Kugelpackung";     
   if(name=="D4_de") return "<b>Packungen:</b> Kristalle und Gitter";     

   if(name=="E1_de") return "<b>Chaos:</b> Spiegel-Chaos";     
   if(name=="E2_de") return "<b>Chaos:</b> Conways Spiel des Lebens";     
   if(name=="E3_de") return "<b>Chaos:</b> Doppelpendel";     
   if(name=="E4_de") return "<b>Chaos:</b> Planet im Schwerefeld";     

   if(name=="F1_de") return "<b>Pflanzen:</b> Kopien von Kopien";     
   if(name=="F2_de") return "<b>Pflanzen:</b> Farne und andere Pflanzen";     
   if(name=="F3_de") return "<b>Pflanzen:</b> Sonnenblume";     
   if(name=="F4_de") return "<b>Pflanzen:</b> Baumstrukturen";     

   if(name=="G1_de") return "<b>Spiele:</b> Sudoku";     
   if(name=="G2_de") return "<b>Spiele:</b> 14/15-Puzzle";     
   if(name=="G3_de") return "<b>Spiele:</b> Solitaire";     
   if(name=="G4_de") return "<b>Spiele:</b> Ausparken";     

   if(name=="H1_de") return "<b>Simulationen:</b> Laufroboter";     
   if(name=="H2_de") return "<b>Simulationen:</b> Balance";     
   if(name=="H3_de") return "<b>Simulationen:</b> Schwarmsimulation";     
   if(name=="H4_de") return "<b>Simulationen:</b> Vererbungsspielplatz";     


   if(name=="A1_en") return "<b>Reflections:</b> Reflection of reflections";     
   if(name=="A2_en") return "<b>Reflections:</b> Physical refelctions";    
   if(name=="A3_en") return "<b>Reflections:</b> Kaleidoscopes";     
   if(name=="A4_en") return "<b>Reflections:</b> Wallpapers";     

   if(name=="B1_en") return "<b>Similarities:</b> Rotational symmetry";     
   if(name=="B2_en") return "<b>Similarities:</b> Juxtapositions of four-gons";     
   if(name=="B3_en") return "<b>Similarities:</b> Iterated similarities";     
   if(name=="B4_en") return "<b>Similarities:</b> Iterating two similarities";     
 
   if(name=="C1_en") return "<b>Solids:</b> Platonic solids";     
   if(name=="C2_en") return "<b>Solids:</b> Archimedian solids";     
   if(name=="C3_en") return "<b>Solids:</b> Nesting platonic solids";     
   if(name=="C4_en") return "<b>Solids:</b> Morphing solids";     
 
   if(name=="D1_en") return "<b>Packings:</b> Space filling polyhedra";     
   if(name=="D2_en") return "<b>Packings:</b> Sierpinski tetrahedron";     
   if(name=="D3_en") return "<b>Packings:</b> Sphere packings";     
   if(name=="D4_en") return "<b>Packings:</b> Crystals and lattices";     
 
   if(name=="E1_en") return "<b>Chaos:</b> Mirror chaos";     
   if(name=="E2_en") return "<b>Chaos:</b> Conway's game of life";     
   if(name=="E3_en") return "<b>Chaos:</b> Double pendulum";     
   if(name=="E4_en") return "<b>Chaos:</b> Planet in a force field";     
 
   if(name=="F1_en") return "<b>Plants:</b> Copies of copies";     
   if(name=="F2_en") return "<b>Plants:</b> Ferns and other plants";     
   if(name=="F3_en") return "<b>Plants:</b> Sunflower";     
   if(name=="F4_en") return "<b>Plants:</b> Tree structures";     
 
   if(name=="G1_en") return "<b>Games:</b> Sudoku";     
   if(name=="G2_en") return "<b>Games:</b> 14/15 Puzzle";     
   if(name=="G3_en") return "<b>Games:</b> Solitaire";     
   if(name=="G4_en") return "<b>Games:</b> Free your car";     
 
   if(name=="H1_en") return "<b>Simulations:</b> A walking robot";     
   if(name=="H2_en") return "<b>Simulations:</b> Balancing seal";     
   if(name=="H3_en") return "<b>Simulations:</b> Swarm simulation";     
   if(name=="H4_en") return "<b>Simulations:</b> Inheritance playground";     


   if(name=="A1_no") return "<b>Speiling:</b> Speiling i speil";     
   if(name=="A2_no") return "<b>Speiling:</b> Fysisk speiling";    
   if(name=="A3_no") return "<b>Speiling:</b> Kaleidoskoper";     
   if(name=="A4_no") return "<b>Speiling:</b> Tapetm&oslash;nster";     

   if(name=="B1_no") return "<b>Likheter:</b> Rotasjonssymmetri";     
   if(name=="B2_no") return "<b>Likheter:</b> Sammenstilling av firkanter";     
   if(name=="B3_no") return "<b>Likheter:</b> Gjentatt kopiering";     
   if(name=="B4_no") return "<b>Likheter:</b> Gjentatt dobbel kopiering";     
 
   if(name=="C1_no") return "<b>Legemer:</b> Platonske legemer";     
   if(name=="C2_no") return "<b>Legemer:</b> Arkimediske legemer";     
   if(name=="C3_no") return "<b>Legemer:</b> N&oslash;stede platonske legemer";     
   if(name=="C4_no") return "<b>Legemer:</b> Forvandling av legemer";     
 
   if(name=="D1_no") return "<b>Pakking:</b> Polyedere som fyller rommet";     
   if(name=="D2_no") return "<b>Pakking:</b> Sierpinski tetraeder";     
   if(name=="D3_no") return "<b>Pakking:</b> Pakking av kuler";     
   if(name=="D4_no") return "<b>Pakking:</b> Krystaller og gitter";     
 
   if(name=="E1_no") return "<b>Kaos:</b> Speilkaos";     
   if(name=="E2_no") return "<b>Kaos:</b> Conways - Livets spill";     
   if(name=="E3_no") return "<b>Kaos:</b> Dobbel pendel";     
   if(name=="E4_no") return "<b>Kaos:</b> Planet i kraftfelt";     
 
   if(name=="F1_no") return "<b>Planter:</b> Kopier av kopier";     
   if(name=="F2_no") return "<b>Planter:</b> Bregner og andre planter";     
   if(name=="F3_no") return "<b>Planter:</b> Solsikke";     
   if(name=="F4_no") return "<b>Planter:</b> Trestrukturer";     
 
   if(name=="G1_no") return "<b>Spill:</b> Sudoku";     
   if(name=="G2_no") return "<b>Spill:</b> 14/15 pusselet";     
   if(name=="G3_no") return "<b>Spill:</b> Kabal";     
   if(name=="G4_no") return "<b>Spill:</b> Slipp bilen fri";     
 
   if(name=="H1_no") return "<b>Simuleringer:</b> Roboten som g&aring;r";     
   if(name=="H2_no") return "<b>Simuleringer:</b> Den balanserende selen";     
   if(name=="H3_no") return "<b>Simuleringer:</b> Simulering av svermer";     
   if(name=="H4_no") return "<b>Simuleringer:</b> Genenes lekeplass";     

   if(name=="A1_nl") return "<b>Reflecties:</b> Spiegel van spiegelingen";     
   if(name=="A2_nl") return "<b>Reflecties:</b> Werkelijke spiegels";    
   if(name=="A3_nl") return "<b>Reflecties:</b> Kaleidoscoop";     
   if(name=="A4_nl") return "<b>Reflecties:</b> Behangpapieren";     

   if(name=="B1_nl") return "<b>Gelijkvormigheden:</b> Rotationele symmetrie";     
   if(name=="B2_nl") return "<b>Gelijkvormigheden:</b> spiraal van vierhoeken";     
   if(name=="B3_nl") return "<b>Gelijkvormigheden:</b> Iteratie van gelijkvormigheden";     
   if(name=="B4_nl") return "<b>Gelijkvormigheden:</b> Iteratie van twee gelijkvormigheden";     
 
   if(name=="C1_nl") return "<b>Lichamen:</b> Platonische lichamen";     
   if(name=="C2_nl") return "<b>Lichamen:</b> Archimedische lichamen";     
   if(name=="C3_nl") return "<b>Lichamen:</b> Genestelde platonische lichamen";     
   if(name=="C4_nl") return "<b>Lichamen:</b> Vervormen van lichamen";     
 
   if(name=="D1_nl") return "<b>Stapels:</b> Ruimtevullende polyhedra";     
   if(name=="D2_nl") return "<b>Stapels:</b> Sierpinski tetra&euml;der";     
   if(name=="D3_nl") return "<b>Stapels:</b> Balverpakkingen";     
   if(name=="D4_nl") return "<b>Stapels:</b> Kristallen en roosters";     
 
   if(name=="E1_nl") return "<b>Chaos:</b> Spiegelchaos";     
   if(name=="E2_nl") return "<b>Chaos:</b> Conway's spel van het leven";     
   if(name=="E3_nl") return "<b>Chaos:</b> Dubbele slinger";     
   if(name=="E4_nl") return "<b>Chaos:</b> Planeet in een krachtveld";     
 
   if(name=="F1_nl") return "<b>Planten:</b> Kopies van kopies";     
   if(name=="F2_nl") return "<b>Planten:</b> Varens en andere planten";     
   if(name=="F3_nl") return "<b>Planten:</b> Zonnebloem";     
   if(name=="F4_nl") return "<b>Planten:</b> Boomstructuren";     
 
   if(name=="G1_nl") return "<b>Spel:</b> Sudoku";     
   if(name=="G2_nl") return "<b>Spel:</b> 14/15 Puzzel";     
   if(name=="G3_nl") return "<b>Spel:</b> Driehoek";     
   if(name=="G4_nl") return "<b>Spel:</b> Rijd uw wagen uit";     
 
   if(name=="H1_nl") return "<b>Simulatie:</b> Wandelende robot";     
   if(name=="H2_nl") return "<b>Simulatie:</b> Balanceren";     
   if(name=="H3_nl") return "<b>Simulatie:</b> Zwermen";     
   if(name=="H4_nl") return "<b>Simulatie:</b> Erfelijkheidsspel";     

   return name;
}

function picname( name,ind) {
   if(gup(name).substr(1,1)==ind.toString())
     return gup(name).substr(0,1)+ind.toString()+"s";
     return gup(name).substr(0,1)+ind.toString()+"ss";

}

