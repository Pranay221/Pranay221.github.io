const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Madeleine L\'Engle\'', 
     'quote': "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."
    },
    {'author': 'Stephen King', 
     'quote': 'If you don\'t have time to read, you don\'t have the time (or the tools) to write. Simple as that.'
    },
    {'author': 'Benjamin Franklin', 
     'quote': 'Either write something worth reading or do something worth writing.'
    },
    {'author': 'Saul Bellow', 
     'quote': 'You never have to change anything you got up in the middle of the night to write.'
    },
    {'author': 'Robert Frost', 
     'quote': 'No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.'
    },
    {'author': 'Ray BradBury', 
     'quote': 'You must stay drunk on writing so reality cannot destroy you.'
    },
    {'author': 'Anne Frank', 
     'quote': 'I can shake off everything as I write; my sorrows disappear, my courage is reborn.'
    },
];
 
button=document.getElementById("myBtn");

function generateQuote()
{
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#AuthorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}

button.addEventListener("click", generateQuote);