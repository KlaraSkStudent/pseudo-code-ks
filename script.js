// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
SET variabel summa
SET varibel dricks
SET variabel antalVanner


FUNCTION named raknaAndel
    SET variabel andel = (summa + summa*dricks)/antalVanner
    PRINT ("Varje person ska betala " + andel + " kr")
ENDFUNCTION

START
    INPUT summa dricks och antalVanner
    CALL FUNCTION raknaAndel
END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

//  FÖRBEREDELSER
SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
SET variabel startOrd;
SET variabel slutOrd;
SET variabel mellanOrd;
SET variabel raknaGissningar = 0;

FUNCTION named "skrivUt"
    Skriver ut innehåll till HTML-dokumentet
END FUNCTION

FUNCTION named "slumpaOrd"
    Slumpar fram ett index ur listan ordbok
    Placerar värdet som står på det slumpade indexet i startOrd
    Slumpar fram en plats i listan ordbok förutom indexet ovan.
    Placerar värdet som står på det slumpade indexet i slutOrd

    skrivUT(startOrd, slutOrd)
END FUNCTION


FUNTION named "kontrolleraOrd"(forstaOrdet, andraOrdet)
    SET variabel diffCount till 0;
    Delar upp forstaOrdet och andraOrdet i en varsin array.
    Loopa genom innehållet i forstaOrdet och andraOrdet och räknar värden som inte matchar. Icke-matchningar placeras i diffCount.
    
    IF "diffCount === 1;"
        THEN 
        Loopa igenom ordbok och se om andraOrdet matchar något ord i ordbok.
            IF andraOrdet ===slutOrd
                raknaGissningar++
                startOrd = andraOrdet;
                skrivUt(startOrd, slutOrd)
                PRINT grattismeddelande ("Grattis, du har klarat spelet på " + raknaGissningar + 
                " försök")

            ELSE IF andraOrdet === ett ord i ordbok && !===slutOrd
                raknaGissningar++
                startOrd = andraOrdet;
                skrivUt(startOrd, slutOrd)
                PRINT ("Bra jobbat, du är ett steg närmre " + slutOrd + ". Lägg till ett nytt ord.")
                
            ELSE
                PRINT felmeddelande till anv. (andraOrdet + 
                " finns inte i ordboken, prova med ett nytt ord")
        ELSE
            PRINT felmeddelande till anv. ("Endast en bokstav får bytas ut åt gången, prova igen med ett nytt ord")
END FUNCTION


START

slumpaOrd(); 

//Användaren skriver in ett ord som placeras i mellanOrd och trycker på en knapp som startar funktionen nedan.
kontrolleraOrd(startOrd, mellanOrd);

END

*/
