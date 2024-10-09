var testa = 0;
var darktheme = document.body;
var tags = 0;

function darkMode()
{
   if(testa == 0)
   {
    darktheme.classList.toggle("dark-mode");
    tags = document.querySelectorAll('.tag');
    tags.forEach
    (tag => 
        {tag.style.color = 'white';}
    );
    testa = 1;
    tags = 1;
   }
   else
   {
    darktheme.classList.toggle("dark-mode");
    tags = document.querySelectorAll('.tag');
    tags.forEach
    (tag => 
        {tag.style.color = 'black';}
    );
    testa = 0;
    tags = 0;
   }
} 