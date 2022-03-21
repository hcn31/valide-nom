function testfonction()
{ 
   var inp=document.getElementById("nom");
   let nom=document.getElementById("nom").value.trim();
   if(nom.match(/^(([a-zèéê]+)?(\-|')?(\s+)?([a-zèéê]+?)(\s+)?)+$/gi)) 
   {
      inp.classList.add('ok');
      inp.classList.remove('no');
      document.getElementById("hcn").innerHTML="bon nom";
   }
   else  {
      inp.classList.add('no');
      inp.classList.remove('ok');
      document.getElementById("hcn").innerHTML="mauvais nom";

   }
 var inp1=document.getElementById("prenom");
   let prenom=document.getElementById("prenom").value.trim();
  if(prenom.match(/^(([a-zèéê]+)?(\-|')?(\s+)?([a-zèéê]+?)(\s+)?)+$/gi)) 
  {
   inp1.classList.add('ok');
   inp1.classList.remove('no');
   document.getElementById("hcn1").innerHTML="bon prenom";
  }
   else{ 
      inp1.classList.add('no');
     inp1.classList.remove('ok');
      document.getElementById("hcn1").innerHTML="mauvais prenom";
   } 

   var inp2=document.getElementById("metier");
   let met=document.getElementById("metier").value.trim();
   if(met.match(/^(([a-zèéê]+)?(\-|')?(\s+)?([a-zèéê]+?)(\s+)?)+$/gi))  
   {
      inp2.classList.add('ok');
   inp2.classList.remove('no');
      document.getElementById("hcn2").innerHTML="bon metier";
   }
   else  
   {
      inp2.classList.add('no');
      inp2.classList.remove('ok');
      document.getElementById("hcn2").innerHTML="mauvais metier";

}
}
function ajouter()
{
 document.getElementById('label').innerHTML ='<label> votre metier: </label>'; 
 document.getElementById('ajouter').innerHTML ='<input type="text" id="metier" onclick="vider()">'; 
 document.getElementById('btn').innerHTML ='<input type="submit" onclick="ajouter1()" value="Ajouter date naissance" id="btn">';


 } 
function ajouter1()
{
document.getElementById('date').innerHTML ='<label> Date naissance : </label>'; 
document.getElementById('inputdate').innerHTML ='<input type="date" id="nom" onclick="vider()">';
document.getElementById('btn').innerHTML =''; 
}

