window.STUDY = {
  "title": "Atelier matematic",
  "sourceCount": 40,
  "lessons": [
    {
      "id": "legi-interne",
      "title": "Legi de compoziție și părți stabile",
      "sourceIds": [
        1
      ],
      "summary": "O lege internă asociază fiecărei perechi dintr-o mulțime un rezultat în aceeași mulțime. O parte stabilă păstrează această proprietate pe o submulțime.",
      "rules": [
        {
          "label": "Lege de compoziție internă",
          "formula": "*:M\\times M\\to M",
          "explanation": "Mulțimea \\(M\\) este nevidă. Pentru orice \\(x,y\\in M\\), rezultatul \\(x*y\\) trebuie să aparțină tot lui \\(M\\)."
        },
        {
          "label": "Parte stabilă",
          "formula": "H\\subseteq M,\\quad \\forall x,y\\in H,\\quad x*y\\in H",
          "explanation": "Demonstrezi închiderea pentru toate perechile din \\(H\\), nu numai pentru câteva exemple."
        },
        {
          "label": "Factorizare pentru închidere",
          "formula": "xy-2x-2y+6=(x-2)(y-2)+2",
          "explanation": "Pe \\([2,+\\infty)\\), factorii sunt nenegativi, deci rezultatul este cel puțin \\(2\\)."
        }
      ],
      "examples": [
        {
          "question": "Pe \\(\\mathbb N\\), \\(x\\circ y=2x+3y^2\\). Calculează \\(2\\circ3\\) și \\(3\\circ2\\).",
          "steps": [
            "\\(2\\circ3=2\\cdot2+3\\cdot3^2=4+27=31\\).",
            "\\(3\\circ2=2\\cdot3+3\\cdot2^2=6+12=18\\).",
            "Rezultatele diferă; operația nu este comutativă."
          ],
          "answer": "\\(2\\circ3=31\\), \\(3\\circ2=18\\)."
        },
        {
          "question": "Arată că \\(H=[2,+\\infty)\\) este stabilă pentru \\(x*y=xy-2x-2y+6\\).",
          "steps": [
            "Pentru \\(x,y\\in H\\), avem \\(x-2\\ge0\\) și \\(y-2\\ge0\\).",
            "Rescriem \\(x*y=(x-2)(y-2)+2\\).",
            "Produsul este nenegativ, deci \\(x*y\\ge2\\)."
          ],
          "answer": "\\(x*y\\in H\\) pentru orice \\(x,y\\in H\\); \\(H\\) este parte stabilă."
        }
      ],
      "recall": [
        {
          "q": "Ce verifici pentru ca o operație să fie internă?",
          "a": "Să fie definită pentru orice pereche din mulțime, iar rezultatul să rămână în mulțime."
        },
        {
          "q": "Cum demonstrezi că o submulțime este stabilă?",
          "a": "Iei \\(x,y\\) arbitrare din submulțime și demonstrezi că \\(x*y\\) aparține submulțimii."
        },
        {
          "q": "Ajunge să testezi trei perechi pentru închidere pe un interval?",
          "a": "Nu. Este necesară o demonstrație pentru toate perechile."
        }
      ],
      "pitfalls": [
        "Nu confunda formula definită pe R cu restricția ei la o mulțime mai mică.",
        "Nu schimba ordinea argumentelor fără să fi demonstrat comutativitatea."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Legi de compoziție și părți stabile"
    },
    {
      "id": "tabla-si-rest",
      "title": "Tabla legii și operații cu rest",
      "sourceIds": [
        2
      ],
      "summary": "Pe o mulțime finită, tabla legii arată toate rezultatele. În operațiile definite prin rest, calculezi formula întâi, apoi reduci modulo numărul dat.",
      "rules": [
        {
          "label": "Citirea tablei",
          "formula": "T_{ij}=x_i*x_j",
          "explanation": "Primul operand indică linia, al doilea coloana. Dacă toate celulele sunt în \\(M\\), operația este internă."
        },
        {
          "label": "Înmulțirea rădăcinilor unității",
          "formula": "M=\\{1,-1,i,-i\\},\\quad i^2=-1,\\quad i^3=-i,\\quad i^4=1",
          "explanation": "Tabla înmulțirii: liniile sunt \\(1,-1,i,-i\\), iar rezultatele sunt respectiv \\((1,-1,i,-i)\\), \\((-1,1,-i,i)\\), \\((i,-i,-1,1)\\), \\((-i,i,1,-1)\\)."
        },
        {
          "label": "Operația cu rest",
          "formula": "x\\perp y=(x+2y)\\bmod 5",
          "explanation": "Restul este unul dintre \\(0,1,2,3,4\\). Pentru o lege internă pe naturale folosim convenția \\(\\mathbb N_0=\\{0,1,2,\\ldots\\}\\)."
        }
      ],
      "examples": [
        {
          "question": "Calculează \\((2\\perp3)\\perp(4\\perp5)\\).",
          "steps": [
            "\\(2\\perp3=(2+2\\cdot3)\\bmod5=8\\bmod5=3\\).",
            "\\(4\\perp5=(4+2\\cdot5)\\bmod5=14\\bmod5=4\\).",
            "\\(3\\perp4=(3+2\\cdot4)\\bmod5=11\\bmod5=1\\)."
          ],
          "answer": "\\(1\\)."
        },
        {
          "question": "Este asociativă operația \\(x\\perp y=(x+2y)\\bmod5\\)?",
          "steps": [
            "\\((2\\perp3)\\perp4=3\\perp4=1\\).",
            "\\(3\\perp4=1\\), deci \\(2\\perp(3\\perp4)=2\\perp1=4\\).",
            "Un contraexemplu este suficient: \\(1\\ne4\\)."
          ],
          "answer": "Nu este asociativă; parantezele schimbă rezultatul."
        }
      ],
      "recall": [
        {
          "q": "Unde cauți x*y în tabla legii?",
          "a": "La intersecția liniei x cu coloana y."
        },
        {
          "q": "Care sunt resturile posibile la împărțirea la 5?",
          "a": "0, 1, 2, 3, 4."
        },
        {
          "q": "Câte contraexemple sunt necesare pentru a infirma asociativitatea?",
          "a": "Unul singur."
        }
      ],
      "pitfalls": [
        "Nu elimina parantezele: operația cu rest din exemplu nu este asociativă.",
        "În S02, a doua compunere cerută are o grupare neclară; nu îi este atribuit un rezultat neconfirmat.",
        "Dacă N exclude 0, o operație care poate produce 0 nu este internă pe N."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Tabla legii și operații cu rest"
    },
    {
      "id": "comutativitate-asociativitate",
      "title": "Comutativitate și asociativitate",
      "sourceIds": [
        4,
        6
      ],
      "summary": "Comutativitatea permite schimbarea ordinii, asociativitatea permite schimbarea parantezelor. Sunt proprietăți distincte, demonstrate pentru toate elementele domeniului.",
      "rules": [
        {
          "label": "Comutativitate",
          "formula": "\\forall x,y\\in M,\\quad x*y=y*x",
          "explanation": "Schimbi ordinea a doi operanzi fără să schimbi rezultatul."
        },
        {
          "label": "Asociativitate",
          "formula": "\\forall x,y,z\\in M,\\quad (x*y)*z=x*(y*z)",
          "explanation": "Schimbi gruparea a trei operanzi fără să schimbi ordinea lor."
        },
        {
          "label": "Forma utilă din caiet",
          "formula": "x*y=xy-4x-4y+20=(x-4)(y-4)+4",
          "explanation": "Expresia este simetrică în \\(x,y\\). Pe \\([4,+\\infty)\\), rezultatul rămâne în interval."
        },
        {
          "label": "Compunere triplă",
          "formula": "(x*y)*z=x*(y*z)=(x-4)(y-4)(z-4)+4",
          "explanation": "Forma factorizată demonstrează asociativitatea imediat. Dezvoltarea comună este \\(xyz-4xy-4xz-4yz+16x+16y+16z-60\\)."
        }
      ],
      "examples": [
        {
          "question": "Demonstrează comutativitatea pentru \\(x*y=xy-4x-4y+20\\).",
          "steps": [
            "\\(x*y=xy-4x-4y+20\\).",
            "\\(y*x=yx-4y-4x+20\\).",
            "Cum \\(xy=yx\\) și adunarea este comutativă, expresiile sunt egale pentru orice \\(x,y\\) din domeniu."
          ],
          "answer": "Operația este comutativă."
        },
        {
          "question": "Demonstrează asociativitatea aceleiași operații.",
          "steps": [
            "Scriem \\(x*y=(x-4)(y-4)+4\\).",
            "\\((x*y)*z=[(x*y)-4](z-4)+4=(x-4)(y-4)(z-4)+4\\).",
            "\\(x*(y*z)=(x-4)[(y*z)-4]+4=(x-4)(y-4)(z-4)+4\\)."
          ],
          "answer": "\\((x*y)*z=x*(y*z)\\)."
        }
      ],
      "recall": [
        {
          "q": "Care proprietate permite schimbarea ordinii?",
          "a": "Comutativitatea."
        },
        {
          "q": "Care proprietate permite schimbarea parantezelor?",
          "a": "Asociativitatea."
        },
        {
          "q": "O singură pereche cu x*y=y*x demonstrează comutativitatea?",
          "a": "Nu. Egalitatea trebuie demonstrată pentru toate perechile."
        }
      ],
      "pitfalls": [
        "În caiet apare \\(2*5=5*2=2\\), dar \\(2\\notin[4,+\\infty)\\); folosește demonstrația generală în domeniul corect.",
        "Nu confunda o verificare numerică reușită cu o demonstrație generală.",
        "Demonstrațiile funcționează și pe intervalul deschis (4,+∞), dacă acesta este domeniul ales."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Comutativitate și asociativitate"
    },
    {
      "id": "neutru-si-simetric",
      "title": "Element neutru și elemente simetrizabile",
      "sourceIds": [
        4,
        11
      ],
      "summary": "Neutrul păstrează elementul cu care este compus. Simetricul lui \\(x\\) îl readuce la neutru. În ambele cazuri, candidatul trebuie să aparțină domeniului.",
      "rules": [
        {
          "label": "Element neutru",
          "formula": "e\\in M,\\quad \\forall x\\in M,\\quad x*e=e*x=x",
          "explanation": "Neutrul este o constantă independentă de \\(x\\). Verifică ambele poziții, dacă nu ai demonstrat comutativitatea."
        },
        {
          "label": "Element simetrizabil",
          "formula": "\\exists x'\\in M,\\quad x*x'=x'*x=e",
          "explanation": "Rezolvă ecuația pentru \\(x'\\), apoi verifică apartenența la mulțime și ambele egalități."
        },
        {
          "label": "Neutrul legii cu prag 4",
          "formula": "x*y=(x-4)(y-4)+4,\\quad e=5",
          "explanation": "Prin \\(e-4=1\\), obții \\(x*5=x\\)."
        },
        {
          "label": "Simetricul legii cu prag 5",
          "formula": "x*y=(x-5)(y-5)+5,\\quad e=6,\\quad x'=5+\\frac1{x-5}",
          "explanation": "Pe \\(M=(5,+\\infty)\\), numitorul este pozitiv, deci \\(x'>5\\), iar simetricul este admis."
        }
      ],
      "examples": [
        {
          "question": "Găsește neutrul pentru \\(x*y=xy-4x-4y+20\\), pe \\([4,+\\infty)\\).",
          "steps": [
            "Impunem \\((x-4)(e-4)+4=x\\) pentru orice \\(x\\).",
            "Este necesar \\(e-4=1\\), deci \\(e=5\\).",
            "\\(x*5=(x-4)\\cdot1+4=x\\); la fel \\(5*x=x\\), iar \\(5\\) aparține domeniului."
          ],
          "answer": "\\(e=5\\)."
        },
        {
          "question": "Arată că fiecare \\(x>5\\) are un simetric pentru \\(x*y=xy-5x-5y+30\\).",
          "steps": [
            "Forma factorizată este \\((x-5)(y-5)+5\\), cu neutru \\(6\\).",
            "\\(x*x'=6\\) devine \\((x-5)(x'-5)=1\\).",
            "\\(x'=5+1/(x-5)>5\\), deci aparține domeniului.",
            "Formula este comutativă, astfel verificarea în ambele poziții dă \\(6\\)."
          ],
          "answer": "Toate elementele sunt simetrizabile, cu \\(x'=5+\\frac1{x-5}\\)."
        }
      ],
      "recall": [
        {
          "q": "Ce verifici după ce ai găsit un candidat pentru neutru?",
          "a": "Că aparține domeniului și că funcționează pentru orice x, în ambele poziții."
        },
        {
          "q": "Simetricul față de o lege oarecare este mereu −x sau 1/x?",
          "a": "Nu. Îl determini din ecuația x*x′=e pentru legea respectivă."
        },
        {
          "q": "De ce x′=5+1/(x−5) aparține lui (5,+∞)?",
          "a": "Pentru că x−5>0, deci termenul reciproc este pozitiv."
        }
      ],
      "pitfalls": [
        "Neutrul trebuie să fie același pentru toate elementele.",
        "În S04, încercarea cu e=0 este corectată; 0 nici nu aparține domeniului.",
        "O soluție algebrică pentru simetric nu este validă dacă iese din mulțime."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Element neutru și elemente simetrizabile"
    },
    {
      "id": "factorizare-si-absorbant",
      "title": "Factorizare, radicali și element absorbant",
      "sourceIds": [
        5,
        7
      ],
      "summary": "Forma factorizată dezvăluie semnul rezultatului și elementele speciale ale unei operații. Un absorbant poate scurta o compunere foarte lungă la un singur pas.",
      "rules": [
        {
          "label": "Închiderea unei legi cu radical",
          "formula": "G=[3,+\\infty),\\quad x*y=\\sqrt{x^2+y^2-9}\\ge3",
          "explanation": "Din \\(x,y\\ge3\\), rezultă \\(x^2+y^2-9\\ge9\\); radicalul este definit și rezultatul este în \\(G\\)."
        },
        {
          "label": "Forma factorizată",
          "formula": "2xy-6x-6y+21=2(x-3)(y-3)+3",
          "explanation": "Pe \\((3,+\\infty)\\), ambii factori sunt pozitivi; rezultatul este strict mai mare decât \\(3\\)."
        },
        {
          "label": "Absorbantul",
          "formula": "x*3=3*x=3",
          "explanation": "Pentru această lege pe \\(\\mathbb R\\), numărul \\(3\\) impune rezultatul oricărei compuneri în care apare."
        },
        {
          "label": "Asociativitatea înainte de compuneri repetate",
          "formula": "(x*y)*z=x*(y*z)=4(x-3)(y-3)(z-3)+3",
          "explanation": "Această egalitate justifică scrierea unei compuneri lungi fără paranteze."
        }
      ],
      "examples": [
        {
          "question": "Arată că \\([3,+\\infty)\\) este stabilă pentru \\(x*y=\\sqrt{x^2+y^2-9}\\).",
          "steps": [
            "\\(x,y\\ge3\\) implică \\(x^2,y^2\\ge9\\).",
            "\\(x^2+y^2-9\\ge9\\).",
            "Radicalul principal este cel puțin \\(3\\)."
          ],
          "answer": "\\(x*y\\in[3,+\\infty)\\)."
        },
        {
          "question": "Pentru \\(x*y=2xy-6x-6y+21\\) pe \\(\\mathbb R\\), calculează \\(1*\\sqrt2*\\sqrt3*\\cdots*\\sqrt{2012}\\).",
          "steps": [
            "Rescriem \\(x*y=2(x-3)(y-3)+3\\).",
            "Observăm \\(x*3=3*x=3\\).",
            "În șir apare \\(\\sqrt9=3\\). Asociativitatea permite gruparea compunerilor; după apariția lui \\(3\\), rezultatul rămâne \\(3\\)."
          ],
          "answer": "\\(3\\)."
        }
      ],
      "recall": [
        {
          "q": "Ce deosebește neutrul de absorbant?",
          "a": "Neutrul păstrează celălalt element; absorbantul impune propriul rezultat."
        },
        {
          "q": "De ce compunerea cu radicali până la √2012 are rezultatul 3?",
          "a": "Conține √9=3, care este absorbant pentru această lege."
        },
        {
          "q": "Ce proprietate verifici înainte să elimini parantezele unei compuneri lungi?",
          "a": "Asociativitatea."
        }
      ],
      "pitfalls": [
        "Compunerea cu \\(1,\\sqrt2,\\ldots\\) se face pe \\(\\mathbb R\\). Aceste valori nu aparțin submulțimii \\((3,+\\infty)\\) studiate separat.",
        "Nu confunda cele două legi din lecție: una conține radical, cealaltă un produs factorizat.",
        "Un absorbant nu este un element neutru."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Factorizare, radicali și element absorbant"
    },
    {
      "id": "matrice-parametrice",
      "title": "Matrice parametrice și legea parametrilor",
      "sourceIds": [
        3,
        5,
        10
      ],
      "summary": "Într-o familie de matrice, calculează produsul și recunoaște parametrul rezultat. Apartenența cere atât forma corectă, cât și respectarea restricțiilor parametrului.",
      "rules": [
        {
          "label": "Prima familie",
          "formula": "A(x)=\\begin{pmatrix}1-2x&-3x\\\\6x&1+9x\\end{pmatrix},\\quad x\\in\\mathbb R\\setminus\\{-1/7\\}",
          "explanation": "Familia este studiată cu înmulțirea obișnuită a matricelor."
        },
        {
          "label": "Legea parametrilor",
          "formula": "A(x)A(y)=A(x+y+7xy)",
          "explanation": "Intrările produsului se reunesc în același parametru \\(t=x+y+7xy\\)."
        },
        {
          "label": "Restricția pentru închidere",
          "formula": "1+7(x+y+7xy)=(1+7x)(1+7y)\\ne0",
          "explanation": "Cum \\(x,y\\ne-1/7\\), parametrul produsului nu poate fi \\(-1/7\\). Această verificare completează demonstrația din caiet."
        },
        {
          "label": "Neutru și proprietăți",
          "formula": "A(0)=I_2,\\quad A(x)A(y)=A(y)A(x)",
          "explanation": "Comutativitatea este valabilă în această familie. Asociativitatea este moștenită de la înmulțirea matricelor; ambele grupări au parametrul \\(x+y+z+7xy+7xz+7yz+49xyz\\)."
        },
        {
          "label": "A doua familie",
          "formula": "B(x)=\\begin{pmatrix}1+6x&4x\\\\-9x&1-6x\\end{pmatrix},\\quad B(x)B(y)=B(x+y)",
          "explanation": "Parametrul rezultat este \\(x+y\\in\\mathbb R\\), deci înmulțirea este internă pe această familie."
        }
      ],
      "examples": [
        {
          "question": "Demonstrează \\(A(x)A(y)=A(x+y+7xy)\\).",
          "steps": [
            "Intrarea \\((1,1)\\) este \\((1-2x)(1-2y)-18xy=1-2x-2y-14xy\\).",
            "Intrarea \\((1,2)\\) este \\((1-2x)(-3y)-3x(1+9y)=-3x-3y-21xy\\).",
            "Intrarea \\((2,1)\\) este \\(6x(1-2y)+6y(1+9x)=6x+6y+42xy\\).",
            "Intrarea \\((2,2)\\) este \\(-18xy+(1+9x)(1+9y)=1+9x+9y+63xy\\).",
            "Fiecare intrare are forma corespunzătoare lui \\(A(t)\\), cu \\(t=x+y+7xy\\)."
          ],
          "answer": "\\(A(x)A(y)=A(x+y+7xy)\\)."
        },
        {
          "question": "Verifică neutrul familiei \\(A(x)\\).",
          "steps": [
            "Candidatul este \\(A(0)=I_2\\).",
            "\\(A(x)A(0)=A(x+0+7x\\cdot0)=A(x)\\).",
            "La fel \\(A(0)A(x)=A(x)\\), iar \\(0\\ne-1/7\\)."
          ],
          "answer": "\\(A(0)=I_2\\)."
        },
        {
          "question": "Arată că \\(B(x)B(y)\\) rămâne în familia \\(B\\).",
          "steps": [
            "Înmulțirea directă dă intrările \\(1+6(x+y)\\), \\(4(x+y)\\), \\(-9(x+y)\\), \\(1-6(x+y)\\).",
            "Recunoaștem \\(B(x+y)\\).",
            "Cum \\(x+y\\in\\mathbb R\\), parametrul este admis."
          ],
          "answer": "\\(B(x)B(y)=B(x+y)\\), deci legea este internă."
        }
      ],
      "recall": [
        {
          "q": "Ce verifici după ce ai recunoscut produsul A(t)?",
          "a": "Că parametrul t respectă toate restricțiile din definiția familiei."
        },
        {
          "q": "Care este neutrul înmulțirii în prima familie?",
          "a": "\\(A(0)=I_2\\)."
        },
        {
          "q": "Înseamnă comutativitatea familiei A(x) că toate matricele comută?",
          "a": "Nu. În general, înmulțirea matricelor nu este comutativă."
        }
      ],
      "pitfalls": [
        "Forma \\(A(t)\\) nu este suficientă fără \\(t\\ne-1/7\\).",
        "Comutativitatea primei familii nu se generalizează la toate matricele.",
        "În S05, un rând din \\(B(y)\\) conține o eroare de copiere: dreapta sus este \\(4y\\), nu \\(4x\\)."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Matrice parametrice și legea parametrilor"
    },
    {
      "id": "monoizi-grupuri",
      "title": "Monoid, grup și grup abelian",
      "sourceIds": [
        15,
        19
      ],
      "summary": "Verifică proprietățile în ordine: lege internă, asociativitate, neutru, inverse, comutativitate. Primele trei dau un monoid; inversele dau un grup; comutativitatea dă un grup abelian.",
      "rules": [
        {
          "label": "Lege internă",
          "formula": "*:M\\times M\\to M",
          "explanation": "M este nevidă și rezultatul operației rămâne în M."
        },
        {
          "label": "Asociativitate",
          "formula": "(x*y)*z=x*(y*z)",
          "explanation": "Se verifică pentru orice x, y, z din M."
        },
        {
          "label": "Element neutru",
          "formula": "x*e=e*x=x",
          "explanation": "Același e din M trebuie să funcționeze pentru toate elementele și în ambele ordini."
        },
        {
          "label": "Element inversabil",
          "formula": "x*x'=x'*x=e",
          "explanation": "Inversul x′ trebuie să aparțină tot lui M. Mulțimea elementelor inversabile se notează U(M)."
        },
        {
          "label": "Comutativitate",
          "formula": "x*y=y*x",
          "explanation": "Un grup care îndeplinește această proprietate este abelian."
        }
      ],
      "examples": [
        {
          "question": "Care sunt elementele inversabile în monoizii (ℕ,+) și (ℕ,·)?",
          "steps": [
            "Pentru adunare, neutrul este 0 și ecuația x+x′=0 are în ℕ doar soluția x=x′=0.",
            "Pentru înmulțire, neutrul este 1 și ecuația xx′=1 are în ℕ doar soluția x=x′=1."
          ],
          "answer": "U(ℕ,+)={0}; U(ℕ,·)={1}, cu convenția 0∈ℕ."
        },
        {
          "question": "Este (ℝ,·) un grup?",
          "steps": [
            "Înmulțirea este internă și asociativă; 1 este elementul neutru.",
            "Pentru 0 nu există x′ cu 0·x′=1."
          ],
          "answer": "Este monoid, dar nu grup."
        }
      ],
      "recall": [
        {
          "q": "Ce proprietăți definesc un monoid?",
          "a": "O lege internă asociativă și un element neutru."
        },
        {
          "q": "Ce adaugi unui monoid pentru a obține un grup?",
          "a": "Fiecare element trebuie să aibă invers în aceeași mulțime."
        },
        {
          "q": "Ce înseamnă grup abelian?",
          "a": "Un grup a cărui lege este și comutativă."
        },
        {
          "q": "Ce reprezintă U(M)?",
          "a": "Mulțimea elementelor inversabile ale monoidului M."
        }
      ],
      "pitfalls": [
        "Comutativitatea nu este obligatorie pentru un monoid sau pentru un grup.",
        "Verifică apartenența neutrului și a inverselor la domeniu.",
        "Exemplul (ℕ,+) presupune convenția 0∈ℕ; fără 0, mulțimea nu conține neutrul adunării."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Monoid, grup și grup abelian"
    },
    {
      "id": "grup-interval-minus-trei",
      "title": "Grup pe (−3,∞): schimbarea x ↦ x+3",
      "sourceIds": [
        13,
        19,
        20,
        23
      ],
      "summary": "Legea x*y=xy+3x+3y+6 devine înmulțirea obișnuită după translația x↦x+3. Această formă face toate verificările scurte.",
      "rules": [
        {
          "label": "Forma utilă",
          "formula": "x*y=(x+3)(y+3)-3",
          "explanation": "Domeniul M=(−3,∞) devine mulțimea numerelor pozitive prin t=x+3."
        },
        {
          "label": "Închidere",
          "formula": "(x*y)+3=(x+3)(y+3)>0",
          "explanation": "Rezultă x*y>−3, deci x*y∈M."
        },
        {
          "label": "Asociativitate",
          "formula": "(x*y)*z=x*(y*z)=(x+3)(y+3)(z+3)-3",
          "explanation": "Cele două parantezări dau exact aceeași expresie."
        },
        {
          "label": "Neutru",
          "formula": "e=-2",
          "explanation": "e+3=1, deoarece 1 este neutrul înmulțirii din coordonata translatată."
        },
        {
          "label": "Invers",
          "formula": "x'=-3+\\frac{1}{x+3}",
          "explanation": "(x+3)(x′+3)=1. Reciprocul este pozitiv, deci x′ rămâne în (−3,∞)."
        },
        {
          "label": "Comutativitate",
          "formula": "(x+3)(y+3)=(y+3)(x+3)",
          "explanation": "Structura este grup abelian."
        }
      ],
      "examples": [
        {
          "question": "Demonstrează că M=(−3,∞), cu x*y=xy+3x+3y+6, este grup abelian.",
          "steps": [
            "Rescrie legea: x*y=(x+3)(y+3)−3.",
            "x,y>−3 ⇒ (x+3)(y+3)>0 ⇒ x*y>−3.",
            "Ambele parantezări ale produsului de trei elemente dau (x+3)(y+3)(z+3)−3.",
            "Din x*e=x rezultă (x+3)(e+3)=x+3 și e=−2∈M.",
            "Din x*x′=−2 rezultă x′=−3+1/(x+3)>−3.",
            "Comutativitatea urmează din comutativitatea produsului obișnuit."
          ],
          "answer": "Toate proprietățile sunt verificate: (M,*) este grup abelian."
        },
        {
          "question": "Pentru aceeași lege pe ℤ, află U(ℤ,*).",
          "steps": [
            "Neutrul este −2. Inversul formal este x′=−3+1/(x+3).",
            "Ca x′ să fie întreg, întregul x+3 trebuie să dividă 1.",
            "x+3∈{−1,1} ⇒ x∈{−4,−2}.",
            "Ambele valori sunt propriile inverse."
          ],
          "answer": "U(ℤ,*)={−4,−2}."
        }
      ],
      "recall": [
        {
          "q": "Ce translație simplifică legea xy+3x+3y+6?",
          "a": "t=x+3; atunci (x*y)+3=(x+3)(y+3)."
        },
        {
          "q": "Care sunt neutrul și inversul în grupul de pe (−3,∞)?",
          "a": "e=−2; x′=−3+1/(x+3)."
        },
        {
          "q": "De ce inversul rămâne mai mare decât −3?",
          "a": "x+3>0, deci 1/(x+3)>0."
        },
        {
          "q": "De ce pe ℤ există numai două elemente inversabile?",
          "a": "Un întreg are reciprocul întreg numai când este 1 sau −1."
        }
      ],
      "pitfalls": [
        "Domeniul schimbă rezultatul: −4 este unitate pe ℤ, dar nu aparține intervalului (−3,∞).",
        "Neutrul acestei legi este −2, nu 0 sau 1.",
        "Nu împărți la x+3 fără să verifici că x≠−3."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Grup pe (−3,∞)"
    },
    {
      "id": "grup-matrice-pell",
      "title": "Grupul matricelor cu a²−2b²=1",
      "sourceIds": [
        13,
        15,
        18
      ],
      "summary": "Parametrii întregi satisfac a²−2b²=1. Înmulțirea păstrează forma matricei și această relație; inversul se obține schimbând semnul lui b.",
      "rules": [
        {
          "label": "Mulțimea",
          "formula": "G=\\left\\{A(a,b)=\\begin{pmatrix}a&2b\\\\b&a\\end{pmatrix}:a,b\\in\\mathbb Z,\\ a^2-2b^2=1\\right\\}",
          "explanation": "Operația este înmulțirea obișnuită a matricelor."
        },
        {
          "label": "Produs",
          "formula": "A(a,b)A(c,d)=A(ac+2bd,ad+bc)",
          "explanation": "Noii parametri sunt întregi."
        },
        {
          "label": "Relația se păstrează",
          "formula": "(ac+2bd)^2-2(ad+bc)^2=(a^2-2b^2)(c^2-2d^2)=1",
          "explanation": "Această identitate verifică apartenența produsului la G."
        },
        {
          "label": "Neutru",
          "formula": "A(1,0)=I_2",
          "explanation": "Parametrii 1 și 0 îndeplinesc relația cerută."
        },
        {
          "label": "Invers",
          "formula": "A(a,b)^{-1}=A(a,-b)",
          "explanation": "Produsul este (a²−2b²)I₂=I₂, iar noua pereche rămâne în G."
        },
        {
          "label": "Grup abelian",
          "formula": "A(a,b)A(c,d)=A(c,d)A(a,b)",
          "explanation": "Asociativitatea vine de la înmulțirea matricelor; comutativitatea vine de la formula simetrică a produsului."
        }
      ],
      "examples": [
        {
          "question": "Verifică direct inversul lui A(a,b).",
          "steps": [
            "A(a,−b) are parametri întregi și a²−2(−b)²=1.",
            "În produs, elementele diagonale sunt a²−2b²=1.",
            "Elementele din afara diagonalei sunt −2ab+2ab=0 și ab−ab=0.",
            "Rezultă A(a,b)A(a,−b)=I₂; verificarea este valabilă și pentru b=0."
          ],
          "answer": "A(a,b)⁻¹=A(a,−b)."
        },
        {
          "question": "Exemplu dedus: calculează pătratul și inversul lui A(3,2).",
          "steps": [
            "3²−2·2²=1, deci A(3,2)∈G.",
            "Formula produsului dă A(3,2)²=A(9+8,6+6)=A(17,12).",
            "17²−2·12²=289−288=1.",
            "Inversul este A(3,−2)."
          ],
          "answer": "A(3,2)²=A(17,12); A(3,2)⁻¹=A(3,−2)."
        }
      ],
      "recall": [
        {
          "q": "Cum înmulțești parametrii (a,b) și (c,d)?",
          "a": "Obții (ac+2bd, ad+bc)."
        },
        {
          "q": "Cum găsești inversul fără să rezolvi un sistem?",
          "a": "Schimbi semnul lui b: A(a,b)⁻¹=A(a,−b)."
        },
        {
          "q": "Care este matricea neutră?",
          "a": "A(1,0)=I₂."
        },
        {
          "q": "De ce această familie este comutativă, deși matricele în general nu sunt?",
          "a": "Formula parametrilor produsului este simetrică în cele două perechi."
        }
      ],
      "pitfalls": [
        "Parametrii din sursă sunt întregi; nu înlocui domeniul cu ℝ fără să spui acest lucru.",
        "Deducerea din caiet împarte la b; verificarea directă a inversului acoperă și b=0.",
        "Asociativitatea înmulțirii matricelor nu implică automat comutativitate."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Grupul matricelor cu a²−2b²=1"
    },
    {
      "id": "grup-rational",
      "title": "Un grup pe intervalul (−1, 1)",
      "sourceIds": [
        9,
        11,
        12
      ],
      "summary": "Operația \\(x*y=(x+y)/(1+xy)\\) formează un grup abelian pe \\((-1,1)\\). Domeniul face numitorii pozitivi și păstrează rezultatul în interval.",
      "rules": [
        {
          "label": "Definirea operației",
          "formula": "G=(-1,1),\\quad x*y=\\frac{x+y}{1+xy}",
          "explanation": "Pentru \\(x,y\\in G\\), \\(|xy|<1\\), deci \\(1+xy>0\\)."
        },
        {
          "label": "Închiderea",
          "formula": "1+x*y=\\frac{(1+x)(1+y)}{1+xy}>0,\\quad 1-x*y=\\frac{(1-x)(1-y)}{1+xy}>0",
          "explanation": "Prima inegalitate dă \\(x*y>-1\\), a doua \\(x*y<1\\)."
        },
        {
          "label": "Asociativitatea",
          "formula": "(x*y)*z=x*(y*z)=\\frac{x+y+z+xyz}{1+xy+xz+yz}",
          "explanation": "Ambele grupări produc aceeași fracție. Numitorul este pozitiv deoarece este \\((1+xy)(1+(x*y)z)\\)."
        },
        {
          "label": "Neutru și inverse",
          "formula": "e=0,\\quad x'=-x,\\quad x*(-x)=\\frac{0}{1-x^2}=0",
          "explanation": "\\(-x\\in G\\) și \\(1-x^2>0\\), deci fiecare element are un simetric."
        },
        {
          "label": "Comutativitate",
          "formula": "\\frac{x+y}{1+xy}=\\frac{y+x}{1+yx}",
          "explanation": "Formula este simetrică în cei doi operanzi. Grupul este abelian."
        }
      ],
      "examples": [
        {
          "question": "Demonstrează că \\(x*y\\in(-1,1)\\).",
          "steps": [
            "Din \\(|x|,|y|<1\\), avem \\(1+xy>0\\).",
            "\\(1+x*y=(1+x)(1+y)/(1+xy)>0\\), deci \\(x*y>-1\\).",
            "\\(1-x*y=(1-x)(1-y)/(1+xy)>0\\), deci \\(x*y<1\\)."
          ],
          "answer": "\\(-1<x*y<1\\); operația este internă."
        },
        {
          "question": "Determină neutrul și simetricul unui element \\(x\\).",
          "steps": [
            "\\(x*0=(x+0)/(1+x\\cdot0)=x\\), iar \\(0*x=x\\).",
            "\\(x*x'=0\\) impune \\(x+x'=0\\), deci \\(x'=-x\\).",
            "Verificăm \\(-x\\in(-1,1)\\) și numitorul \\(1-x^2>0\\)."
          ],
          "answer": "\\(e=0\\), \\(x'=-x\\)."
        }
      ],
      "recall": [
        {
          "q": "De ce numitorul 1+xy nu se anulează?",
          "a": "Pentru că \\(|xy|<1\\), deci \\(1+xy>0\\)."
        },
        {
          "q": "Care sunt neutrul și simetricul în acest grup?",
          "a": "Neutrul este \\(0\\), iar simetricul lui \\(x\\) este \\(-x\\)."
        },
        {
          "q": "În ce ordine poți verifica structura de grup abelian?",
          "a": "Operație definită și internă, asociativitate, neutru, inverse, apoi comutativitate."
        }
      ],
      "pitfalls": [
        "Verifică semnul numitorului înainte să împarți o inegalitate.",
        "Capetele −1 și 1 sunt excluse.",
        "Nu aplica formula pe toată \\(\\mathbb R\\): poate avea numitor nul și poate ieși din interval."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Un grup pe intervalul (−1, 1)"
    },
    {
      "id": "bac-lege-doua-treimi",
      "title": "Exerciții BAC: legea ⅔(x−3)(y−3)+3",
      "sourceIds": [
        8,
        14,
        16,
        17
      ],
      "summary": "Păstrează forma factorizată. Produsul repetat devine un produs obișnuit al termenilor x−3, cu o putere a lui 2/3 în față.",
      "rules": [
        {
          "label": "Legea",
          "formula": "x*y=\\frac23(x-3)(y-3)+3",
          "explanation": "O lege de compoziție pe ℝ."
        },
        {
          "label": "Trei termeni",
          "formula": "x*y*z=\\frac49(x-3)(y-3)(z-3)+3",
          "explanation": "Înlocuiește mai întâi x*y, apoi observă anularea lui +3−3."
        },
        {
          "label": "n termeni",
          "formula": "x_1*\\cdots*x_n=\\left(\\frac23\\right)^{n-1}\\prod_{k=1}^n(x_k-3)+3",
          "explanation": "Fiecare operație suplimentară aduce un factor 2/3."
        }
      ],
      "examples": [
        {
          "question": "Arată că 0*2=5.",
          "steps": [
            "0*2=(2/3)(0−3)(2−3)+3.",
            "(2/3)(−3)(−1)+3=2+3."
          ],
          "answer": "0*2=5."
        },
        {
          "question": "Rezolvă x*(3x/2)=5x, x∈ℝ.",
          "steps": [
            "x*(3x/2)=(2/3)(x−3)(3x/2−3)+3=x²−5x+9.",
            "Egalitatea devine x²−5x+9=5x.",
            "x²−10x+9=(x−1)(x−9)=0."
          ],
          "answer": "x∈{1,9}."
        },
        {
          "question": "Calculează √1*√2*⋯*√2026.",
          "steps": [
            "Aplică formula cu 2026 termeni.",
            "Produsul obișnuit conține factorul √9−3=0.",
            "Toată partea multiplicativă se anulează și rămâne +3."
          ],
          "answer": "3."
        },
        {
          "question": "Află perechile naturale (m,n) cu m*m*n=−1.",
          "steps": [
            "(4/9)(m−3)²(n−3)+3=−1 ⇒ (m−3)²(n−3)=−9.",
            "Pătratul întreg pozitiv (m−3)² divide 9; poate fi 1 sau 9.",
            "Dacă este 9, m=0 sau 6 și n−3=−1, deci n=2.",
            "Dacă este 1, m=2 sau 4 și n=−6, care nu este natural.",
            "Verifică: 6*6=9, 0*0=9, iar 9*2=−1."
          ],
          "answer": "(0,2) și (6,2), dacă 0∈ℕ; numai (6,2), dacă ℕ începe cu 1."
        }
      ],
      "recall": [
        {
          "q": "Ce putere apare în produsul de n elemente?",
          "a": "(2/3)ⁿ⁻¹, fiindcă sunt n−1 operații."
        },
        {
          "q": "De ce produsul radicalilor până la √2026 este 3?",
          "a": "Conține termenul √9=3, care produce factorul zero în produsul transformat."
        },
        {
          "q": "Care este ecuația obișnuită echivalentă cu m*m*n=−1?",
          "a": "(m−3)²(n−3)=−9."
        },
        {
          "q": "Care sunt soluțiile lui x*(3x/2)=5x?",
          "a": "1 și 9."
        }
      ],
      "pitfalls": [
        "Nu confunda legea * cu înmulțirea obișnuită.",
        "În fotografii, literele m și n seamănă; enunțul și verificarea folosesc m*m*n.",
        "Precizează convenția pentru ℕ când apare soluția m=0.",
        "Păstrează +3 la finalul formulei produsului repetat."
      ],
      "group": "Algebră",
      "notes": [],
      "shortTitle": "Exerciții BAC"
    },
    {
      "id": "primitive-definitie",
      "title": "Primitiva: integrarea inversează derivarea",
      "sourceIds": [
        24,
        25
      ],
      "summary": "O primitivă F a lui f satisface F′=f pe un interval. Integrala nedefinită descrie întreaga familie F+C, nu o singură funcție.",
      "rules": [
        {
          "label": "Definiție",
          "formula": "F'(x)=f(x),\\qquad x\\in I",
          "explanation": "F este derivabilă pe intervalul I și derivata ei este f."
        },
        {
          "label": "Familia primitivelor",
          "formula": "\\int f(x)\\,dx=F(x)+C,\\quad C\\in\\mathbb R",
          "explanation": "Pe același interval, două primitive diferă printr-o constantă."
        },
        {
          "label": "Liniaritate",
          "formula": "\\int(af+bg)\\,dx=a\\int f\\,dx+b\\int g\\,dx",
          "explanation": "a și b sunt constante; la final este suficientă o singură constantă arbitrară."
        },
        {
          "label": "Verificare",
          "formula": "\\left(F(x)+C\\right)'=f(x)",
          "explanation": "Derivă rezultatul pentru a controla semnele și coeficienții."
        }
      ],
      "examples": [
        {
          "question": "Găsește toate primitivele lui f(x)=2x+3.",
          "steps": [
            "Derivata lui x² este 2x; derivata lui 3x este 3.",
            "Adăugarea unei constante nu schimbă derivata.",
            "x²+3x−7 și x²+3x+2 sunt membri ai aceleiași familii."
          ],
          "answer": "∫(2x+3) dx=x²+3x+C."
        },
        {
          "question": "Dacă F(x)=x²+3x+2 este o primitivă, care este f?",
          "steps": [
            "Aplică definiția: f=F′.",
            "Derivează termenii: (x²)′=2x, (3x)′=3, 2′=0."
          ],
          "answer": "f(x)=2x+3."
        },
        {
          "question": "Exercițiul deschis din caiet: calculează ∫(2x+3)/x² dx.",
          "steps": [
            "Pentru x≠0, descompune integrandul în 2/x+3/x².",
            "Integrează: 2∫dx/x=2 ln|x| și 3∫x⁻² dx=−3/x.",
            "Verifică prin derivare: 2/x+3/x²=(2x+3)/x²."
          ],
          "answer": "2 ln|x|−3/x+C, pe fiecare interval care nu conține 0."
        }
      ],
      "recall": [
        {
          "q": "Cum verifici că F este primitivă a lui f?",
          "a": "Derivezi F și verifici F′=f pe intervalul cerut."
        },
        {
          "q": "De ce apare +C?",
          "a": "Derivata oricărei constante este zero, deci există o întreagă familie de primitive."
        },
        {
          "q": "Pot două primitive diferi prin mai mult decât o constantă?",
          "a": "Pe același interval, nu. Pe componente separate ale domeniului pot exista constante diferite."
        }
      ],
      "pitfalls": [
        "Nu uita constanta C la integrale nedefinite.",
        "Afirmația despre diferența constantă se aplică pe un interval conex.",
        "Când integrandul nu este definit în 0, formulele se folosesc separat pe intervalele din domeniu."
      ],
      "group": "Analiză",
      "notes": [],
      "shortTitle": "Primitiva"
    },
    {
      "id": "primitive-puteri",
      "title": "Primitive ale puterilor și radicalilor",
      "sourceIds": [
        21,
        22
      ],
      "summary": "Transformă fracțiile și radicalii în puteri. Crește exponentul cu 1 și împarte la noul exponent; exponentul −1 este excepția logaritmică.",
      "rules": [
        {
          "label": "Constante",
          "formula": "\\int 1\\,dx=x+C,\\qquad\\int c\\,dx=cx+C",
          "explanation": "c este o constantă reală."
        },
        {
          "label": "Regula puterii",
          "formula": "\\int x^m\\,dx=\\frac{x^{m+1}}{m+1}+C,\\quad m\\ne-1",
          "explanation": "Se aplică pe intervale pe care puterile sunt reale; pentru un exponent real general se poate lucra pe x>0."
        },
        {
          "label": "Rădăcina pătrată",
          "formula": "\\int\\sqrt{x}\\,dx=\\frac23x\\sqrt{x}+C",
          "explanation": "√x=x¹ᐟ²; regula puterii dă exponentul 3/2."
        },
        {
          "label": "Puteri negative",
          "formula": "\\int\\frac{dx}{x^2}=-\\frac1x+C,\\qquad\\int\\frac{dx}{x^3}=-\\frac1{2x^2}+C",
          "explanation": "x≠0; semnele minus vin din noii exponenți −1 și −2."
        },
        {
          "label": "Derivata radicalului",
          "formula": "\\int\\frac{dx}{2\\sqrt{x}}=\\sqrt{x}+C",
          "explanation": "Pe x>0, (√x)′=1/(2√x)."
        }
      ],
      "examples": [
        {
          "question": "Calculează ∫3/x³ dx.",
          "steps": [
            "Scrie integrandul ca 3x⁻³.",
            "Crește exponentul: −3+1=−2.",
            "3·x⁻²/(−2)=−3/(2x²).",
            "Derivata lui −3/(2x²) este 3/x³."
          ],
          "answer": "−3/(2x²)+C, x≠0."
        },
        {
          "question": "Calculează ∫√x dx.",
          "steps": [
            "√x=x¹ᐟ².",
            "Noul exponent este 3/2; împărțirea la 3/2 înseamnă înmulțire cu 2/3.",
            "(2/3)x³ᐟ²=(2/3)x√x."
          ],
          "answer": "2x√x/3+C."
        }
      ],
      "recall": [
        {
          "q": "Care este excepția regulii puterii?",
          "a": "m=−1; ∫dx/x=ln|x|+C."
        },
        {
          "q": "Care este primitiva lui 1/x²?",
          "a": "−1/x+C."
        },
        {
          "q": "Cum scrii √x ca putere?",
          "a": "x¹ᐟ²."
        }
      ],
      "pitfalls": [
        "Nu aplica formula xᵐ⁺¹/(m+1) pentru m=−1.",
        "Verifică semnul primitivelor puterilor negative.",
        "Puterile fracționare și radicalii cer atenție la domeniul real.",
        "Semnul final al exemplului 3/x³ din fotografie este neclar; minusul este confirmat prin derivare."
      ],
      "group": "Analiză",
      "notes": [],
      "shortTitle": "Primitive ale puterilor și radicalilor"
    },
    {
      "id": "primitive-exponentiale-logaritmi",
      "title": "Exponențiale și logaritmi",
      "sourceIds": [
        21,
        22,
        24
      ],
      "summary": "Exponențiala aˣ aduce factorul 1/ln a. Un numitor liniar ax+b aduce factorul 1/a și logaritmul modulului.",
      "rules": [
        {
          "label": "Exponențiala generală",
          "formula": "\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C,\\quad a>0,\\ a\\ne1",
          "explanation": "Derivata lui aˣ este aˣ ln a, deci compensăm cu 1/ln a."
        },
        {
          "label": "Exponențiala naturală",
          "formula": "\\int e^x\\,dx=e^x+C",
          "explanation": "ln e=1."
        },
        {
          "label": "Reciprocul",
          "formula": "\\int\\frac{dx}{x}=\\ln|x|+C,\\quad x\\ne0",
          "explanation": "Modulul permite aceeași formulă pe intervalele pozitive și negative."
        },
        {
          "label": "Numitor liniar",
          "formula": "\\int\\frac{dx}{ax+b}=\\frac1a\\ln|ax+b|+C,\\quad a\\ne0",
          "explanation": "Derivata expresiei interioare ax+b este a. Integrandul cere și ax+b≠0."
        }
      ],
      "examples": [
        {
          "question": "Calculează ∫dx/(2x+3).",
          "steps": [
            "Coeficientul lui x este 2, deci factorul compensator este 1/2.",
            "Derivata lui (1/2)ln|2x+3| este (1/2)·2/(2x+3)."
          ],
          "answer": "(1/2)ln|2x+3|+C, x≠−3/2."
        },
        {
          "question": "Calculează ∫2 dx/(2x+3).",
          "steps": [
            "Scoate constanta 2 în fața integralei.",
            "2·(1/2)ln|2x+3|=ln|2x+3|.",
            "Derivează pentru control: 2/(2x+3)."
          ],
          "answer": "ln|2x+3|+C. Acesta corectează rezultatul inconsistent scris în fotografia 24."
        },
        {
          "question": "Calculează ∫dx/(3+4x).",
          "steps": [
            "Rescrie numitorul ca 4x+3.",
            "Coeficientul interior este 4, deci împărțim la 4."
          ],
          "answer": "(1/4)ln|4x+3|+C."
        }
      ],
      "recall": [
        {
          "q": "De ce apare 1/a în ∫dx/(ax+b)?",
          "a": "Pentru a compensa derivata interioară (ax+b)′=a."
        },
        {
          "q": "Care sunt condițiile pentru formula ∫aˣ dx?",
          "a": "a>0 și a≠1; pentru a=1, integrandul este constant 1."
        },
        {
          "q": "De ce scrii ln|x|?",
          "a": "Integrandul 1/x este definit și pentru x<0; ln|x| are derivata 1/x pe ambele intervale."
        }
      ],
      "pitfalls": [
        "Nu uita factorul 1/a sau 1/ln a.",
        "Păstrează exact ax+b în logaritm; nu schimba semnul lui b.",
        "Exemplul cu numeratorul 2 din fotografia 24 are o eroare de coeficient și de semn în rezultatul scris; formula a fost verificată prin derivare.",
        "Modulul și constanta C sunt omise în unele rânduri ale caietului; aici sunt incluse."
      ],
      "group": "Analiză",
      "notes": [],
      "shortTitle": "Exponențiale și logaritmi"
    },
    {
      "id": "primitive-trigonometrice",
      "title": "Formule trigonometrice de memorat",
      "sourceIds": [
        22
      ],
      "summary": "Grupează formulele în perechi: sin/cos, tan/cot și funcții trigonometrice inverse. Verifică atent cele trei semne minus.",
      "rules": [
        {
          "label": "Sinus și cosinus",
          "formula": "\\int\\sin x\\,dx=-\\cos x+C,\\qquad\\int\\cos x\\,dx=\\sin x+C",
          "explanation": "Derivata cosinusului este −sinus; derivata sinusului este cosinus."
        },
        {
          "label": "Tangenta",
          "formula": "\\int\\frac{dx}{\\cos^2x}=\\tan x+C",
          "explanation": "Pe intervale cu cos x≠0."
        },
        {
          "label": "Cotangenta",
          "formula": "\\int\\frac{dx}{\\sin^2x}=-\\cot x+C",
          "explanation": "Pe intervale cu sin x≠0; păstrează minusul."
        },
        {
          "label": "Arcsinus",
          "formula": "\\int\\frac{dx}{\\sqrt{1-x^2}}=\\arcsin x+C",
          "explanation": "Pentru −1<x<1."
        },
        {
          "label": "Arctangentă",
          "formula": "\\int\\frac{dx}{1+x^2}=\\arctan x+C",
          "explanation": "Valabil pentru toate numerele reale."
        },
        {
          "label": "Integrala tangentei",
          "formula": "\\int\\tan x\\,dx=-\\ln|\\cos x|+C",
          "explanation": "Pe intervale pe care cos x≠0."
        },
        {
          "label": "Integrala cotangentei",
          "formula": "\\int\\cot x\\,dx=\\ln|\\sin x|+C",
          "explanation": "Pe intervale pe care sin x≠0."
        }
      ],
      "examples": [
        {
          "question": "Cum verifici primitiva lui tan x?",
          "steps": [
            "Derivează −ln|cos x|.",
            "Obții −(−sin x)/(cos x)=tan x, unde cos x≠0."
          ],
          "answer": "∫tan x dx=−ln|cos x|+C."
        },
        {
          "question": "Cum verifici primitiva lui 1/sin²x?",
          "steps": [
            "Derivata lui cot x este −1/sin²x.",
            "Prin urmare, derivata lui −cot x este 1/sin²x."
          ],
          "answer": "∫dx/sin²x=−cot x+C."
        }
      ],
      "recall": [
        {
          "q": "Ce trei formule din grupul trigonometriei au minus?",
          "a": "∫sin x=−cos x+C; ∫dx/sin²x=−cot x+C; ∫tan x=−ln|cos x|+C."
        },
        {
          "q": "Ce integrand conduce la arctan x?",
          "a": "1/(1+x²)."
        },
        {
          "q": "Ce integrand conduce la arcsin x?",
          "a": "1/√(1−x²), pentru |x|<1."
        }
      ],
      "pitfalls": [
        "Respectă punctele unde sin x sau cos x se anulează.",
        "Nu confunda arcsin x cu sin x și arctan x cu tan x.",
        "Rândul 11 tăiat din fotografie a fost înlocuit de formula lizibilă corectată pentru cos x."
      ],
      "group": "Analiză",
      "notes": [],
      "shortTitle": "Formule trigonometrice de memorat"
    },
    {
      "id": "primitive-numitori-patratici",
      "title": "Numitori pătratici și fracții simple",
      "sourceIds": [
        22,
        26
      ],
      "summary": "Semnul din numitor hotărăște formula: x²+a² duce la arctangentă; x²−a² se descompune în fracții simple și duce la logaritm.",
      "rules": [
        {
          "label": "Sumă de pătrate",
          "formula": "\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\frac xa+C",
          "explanation": "Presupunem a>0."
        },
        {
          "label": "Diferență de pătrate",
          "formula": "\\int\\frac{dx}{x^2-a^2}=\\frac1{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C",
          "explanation": "a>0 și x≠±a; formula se aplică pe fiecare interval din domeniu."
        },
        {
          "label": "Descompunere",
          "formula": "\\frac1{x^2-a^2}=\\frac1{2a}\\left(\\frac1{x-a}-\\frac1{x+a}\\right)",
          "explanation": "Factorizează x²−a²=(x−a)(x+a), apoi identifică coeficienții."
        },
        {
          "label": "Radical cu diferență",
          "formula": "\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac xa+C",
          "explanation": "a>0 și |x|<a."
        },
        {
          "label": "Radical cu sumă",
          "formula": "\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\ln\\left(x+\\sqrt{x^2+a^2}\\right)+C",
          "explanation": "a>0; expresia din logaritm este pozitivă pentru orice x real."
        }
      ],
      "examples": [
        {
          "question": "Dedu formula pentru ∫dx/(x²−a²), a>0.",
          "steps": [
            "Scrie 1/(x²−a²)=A/(x−a)+B/(x+a).",
            "Aducerea la același numitor dă numărătorul x(A+B)+a(A−B).",
            "Identifică: A+B=0 și a(A−B)=1.",
            "A=1/(2a), B=−1/(2a).",
            "Integrează termenii: (1/(2a))(ln|x−a|−ln|x+a|)+C.",
            "Combină logaritmii."
          ],
          "answer": "(1/(2a))ln|(x−a)/(x+a)|+C."
        },
        {
          "question": "Calculează ∫dx/(x²−9).",
          "steps": [
            "9=3², deci a=3.",
            "Factorul din față este 1/(2·3)=1/6.",
            "Raportul din logaritm este (x−3)/(x+3)."
          ],
          "answer": "(1/6)ln|(x−3)/(x+3)|+C, x≠±3."
        }
      ],
      "recall": [
        {
          "q": "Ce primitivă alegi pentru 1/(x²+a²)?",
          "a": "(1/a)arctan(x/a)+C, a>0."
        },
        {
          "q": "Ce primitivă alegi pentru 1/(x²−a²)?",
          "a": "(1/(2a))ln|(x−a)/(x+a)|+C."
        },
        {
          "q": "Care sunt coeficienții fracțiilor simple?",
          "a": "A=1/(2a) în fața lui 1/(x−a), B=−1/(2a) în fața lui 1/(x+a)."
        },
        {
          "q": "Care este condiția pentru integrandul 1/√(a²−x²)?",
          "a": "a>0 și |x|<a."
        }
      ],
      "pitfalls": [
        "Nu confunda x²−a² cu a²−x².",
        "Nu schimba ordinea raportului din logaritm fără să schimbi și semnul din față.",
        "Parametrul a=0 cere o formulă separată; formulele de mai sus presupun a>0.",
        "Ultima formulă radicală din fotografia 22 este tăiată și neclară; nu a fost folosită."
      ],
      "group": "Analiză",
      "notes": [],
      "shortTitle": "Numitori pătratici și fracții simple"
    },
    {
      "id": "primitive-compuse",
      "title": "Funcții compuse: caută derivata din interior",
      "sourceIds": [
        27
      ],
      "summary": "Integrarea compunerilor este regula lanțului citită invers. Recunoaște funcția interioară u și păstrează factorul u′.",
      "rules": [
        {
          "label": "Regula compunerii",
          "formula": "\\int f(g(x))g'(x)\\,dx=F(g(x))+C,\\qquad F'=f",
          "explanation": "g este derivabilă și valorile ei se află în intervalul unde F este primitivă a lui f."
        },
        {
          "label": "Putere compusă",
          "formula": "\\int u^m u'\\,dx=\\frac{u^{m+1}}{m+1}+C,\\quad m\\ne-1",
          "explanation": "Pentru u=u(x), derivata interioară u′ trebuie să apară în integrand sau să fie compensată."
        },
        {
          "label": "Interior liniar",
          "formula": "\\int(ax+b)^m\\,dx=\\frac{(ax+b)^{m+1}}{a(m+1)}+C",
          "explanation": "a≠0 și m≠−1, pe un interval unde puterile sunt reale."
        }
      ],
      "examples": [
        {
          "question": "Calculează ∫(2x+3)² dx prin compunere.",
          "steps": [
            "Alege u=2x+3, deci u′=2.",
            "Compensează derivata interioară: ∫u² dx=(1/2)∫u²u′ dx.",
            "Aplică formula puterii compuse: (1/2)u³/3+C."
          ],
          "answer": "(2x+3)³/6+C."
        },
        {
          "question": "Calculează aceeași integrală prin dezvoltare și compară.",
          "steps": [
            "(2x+3)²=4x²+12x+9.",
            "Integrează termen cu termen: 4x³/3+6x²+9x+C.",
            "Dezvoltarea lui (2x+3)³/6 dă 4x³/3+6x²+9x+27/6.",
            "Diferența 27/6 este constantă și se absoarbe în C."
          ],
          "answer": "4x³/3+6x²+9x+C; aceeași familie de primitive."
        }
      ],
      "recall": [
        {
          "q": "Ce trebuie să cauți când integrandul conține f(g(x))?",
          "a": "Factorul g′(x), derivata funcției interioare."
        },
        {
          "q": "De ce apare 1/2 în ∫(2x+3)² dx?",
          "a": "Pentru că derivata interioară este 2, iar factorul 1/2 o compensează."
        },
        {
          "q": "De ce două răspunsuri diferite printr-o constantă sunt ambele corecte?",
          "a": "Constanta este inclusă în familia arbitrară +C; derivatele celor două expresii coincid."
        }
      ],
      "pitfalls": [
        "Nu aplica formula compunerii fără factorul derivării interioare.",
        "La exponenții −1 folosește formula logaritmică, nu împărțirea la m+1.",
        "Schema abstractă din fotografie are etichete inconsistente; regula a fost normalizată și verificată prin derivare."
      ],
      "group": "Analiză",
      "notes": [],
      "shortTitle": "Funcții compuse"
    },
    {
      "id": "integrale-simplificare",
      "title": "Simplifică integrandul înainte de integrare",
      "sourceIds": [
        8,
        14
      ],
      "summary": "Când integrandul conține un factor care se simplifică, verifică mai întâi că acel factor este nenul. Apoi integrează expresia rămasă și aplică limitele.",
      "rules": [
        {
          "label": "Pozitivitatea numitorului",
          "formula": "x^2-4x+5=(x-2)^2+1>0",
          "explanation": "Expresia este strict pozitivă pentru orice x. În enunțul fotografiat apare un numitor fără radical; în calculul din caiet apare unul cu radical. Rezultatele se disting mai jos."
        },
        {
          "label": "Evaluarea unei integrale definite",
          "formula": "\\int_a^b g(x)\\,dx=F(b)-F(a),\\quad F'=g",
          "explanation": "Păstrează parantezele când scazi valoarea la limita inferioară."
        },
        {
          "label": "Factorul logaritmic",
          "formula": "\\frac{x^2-c}{x\\ln x}\\cdot x\\ln x=x^2-c\\quad (x\\ln x\\ne0)",
          "explanation": "Pe \\([2,3]\\), avem \\(x>0\\) și \\(\\ln x>0\\), deci simplificarea este permisă."
        }
      ],
      "examples": [
        {
          "question": "Pentru enunțul vizibil \\(f(x)=(x-2)/(x^2-4x+5)\\), calculează \\(\\int_2^4 f(x)\\sqrt{x^2-4x+5}\\,dx\\).",
          "steps": [
            "Numitorul este \\((x-2)^2+1>0\\). Simplificarea corectă lasă \\((x-2)/\\sqrt{x^2-4x+5}\\).",
            "Recunoaștem derivata: \\((\\sqrt{x^2-4x+5})'=(x-2)/\\sqrt{x^2-4x+5}\\).",
            "Integrala este \\([\\sqrt{x^2-4x+5}]_2^4=\\sqrt5-1\\)."
          ],
          "answer": "\\(\\sqrt5-1\\), pentru numitorul fără radical din enunț."
        },
        {
          "question": "Ce rezultat ar da varianta cu \\(f(x)=(x-2)/\\sqrt{x^2-4x+5}\\), folosită în calculul caietului?",
          "steps": [
            "Produsul cu radicalul devine \\(x-2\\).",
            "\\(\\int_2^4(x-2)\\,dx=[x^2/2-2x]_2^4=0-(-2)=2\\)."
          ],
          "answer": "\\(2\\). Această variantă explică rezolvarea din caiet, însă diferă de enunțul vizibil."
        },
        {
          "question": "Pentru \\(f(x)=(x^2-5)/(x\\ln x)\\), calculează \\(\\int_2^3 f(x)x\\ln x\\,dx\\).",
          "steps": [
            "Pe \\([2,3]\\), \\(x\\ln x\\ne0\\). Simplificăm la \\(x^2-5\\).",
            "O primitivă este \\(x^3/3-5x\\).",
            "\\([x^3/3-5x]_2^3=(9-15)-(8/3-10)=4/3\\)."
          ],
          "answer": "\\(4/3\\)."
        }
      ],
      "recall": [
        {
          "q": "Ce verifici înainte să simplifici un factor din numitor?",
          "a": "Că nu este zero pe domeniul și intervalul de integrare."
        },
        {
          "q": "Cum eviți greșeala de semn la limita inferioară?",
          "a": "Scrii F(b)−(F(a)), cu paranteze."
        },
        {
          "q": "De ce nu păstrăm constanta C când evaluăm o integrală definită?",
          "a": "În diferența \\(F(b)-F(a)\\), aceeași constantă se anulează."
        }
      ],
      "pitfalls": [
        "S08: enunțul vizibil are numitor fără radical, dar calculul îl folosește cu radical. Cele două variante dau rezultate diferite; nu transfera rezultatul între ele.",
        "S14: enunțul și primitiva folosesc constanta 5. Un rând intermediar schimbă cifra în 4; aici este corectat la 5.",
        "Primul exercițiu tăiat și suprascris din S08 nu a fost reconstruit."
      ],
      "group": "Analiză",
      "notes": [
        "S08 conține două variante incompatibile ale numitorului; am păstrat enunțul vizibil și am explicat separat varianta calculului. S14 a fost verificată din enunț și din primitiva scrisă."
      ],
      "shortTitle": "Simplifică integrandul înainte de integrare"
    },
    {
      "id": "pregatire-rationala-28",
      "title": "Integrale raționale: pregătirea algebrică",
      "sourceIds": [
        28
      ],
      "summary": "Înainte de a integra, descompune fracția și potrivește numărătorul cu derivata numitorului. Un numitor de forma \\(x^2-a^2\\) conduce la un logaritm al unui raport.",
      "rules": [
        {
          "label": "Diferență de pătrate",
          "formula": "\\int\\frac{dx}{x^2-a^2}=\\frac1{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C",
          "explanation": "Pentru \\(a>0\\), pe intervale care nu conțin \\(\\pm a\\)."
        },
        {
          "label": "Numitor liniar",
          "formula": "\\int\\frac{dx}{ax+b}=\\frac1a\\ln|ax+b|+C",
          "explanation": "Pentru \\(a\\ne0\\), factorul \\(1/a\\) compensează derivata numitorului."
        },
        {
          "label": "Separarea fracției",
          "formula": "\\frac{2x+3}{x^2}=\\frac2x+\\frac3{x^2}",
          "explanation": "Integrează separat fiecare termen; \\(\\int x^{-2}dx=-1/x+C\\)."
        },
        {
          "label": "Împărțire algebrică",
          "formula": "\\frac{2x+3}{2x-5}=1+\\frac8{2x-5}",
          "explanation": "Adaugă și scade termenul care transformă numărătorul în numitor."
        }
      ],
      "examples": [
        {
          "question": "Calculează \\(\\int dx/(x^2-10)\\).",
          "steps": [
            "Alege \\(a=\\sqrt{10}\\).",
            "Aplică formula diferenței de pătrate; \\(x\\ne\\pm\\sqrt{10}\\)."
          ],
          "answer": "\\(\\frac1{2\\sqrt{10}}\\ln|\\frac{x-\\sqrt{10}}{x+\\sqrt{10}}|+C\\)"
        },
        {
          "question": "Calculează \\(\\int dx/(x^2-8)\\).",
          "steps": [
            "Alege \\(a=\\sqrt8\\).",
            "Aplică formula; \\(x\\ne\\pm\\sqrt8\\)."
          ],
          "answer": "\\(\\frac1{2\\sqrt8}\\ln|\\frac{x-\\sqrt8}{x+\\sqrt8}|+C\\)"
        },
        {
          "question": "Calculează \\(\\int dx/(4x^2-9)\\).",
          "steps": [
            "\\(4x^2-9=4[x^2-(3/2)^2]\\).",
            "Scoate \\(1/4\\); apoi coeficientul este \\((1/4)(1/3)=1/12\\)."
          ],
          "answer": "\\(\\frac1{12}\\ln|\\frac{2x-3}{2x+3}|+C\\)"
        },
        {
          "question": "Calculează \\(\\int(2x+3)/x^2\\,dx\\).",
          "steps": [
            "Scrie integrandul \\(2/x+3x^{-2}\\).",
            "Integrează prin liniaritate, pe intervale cu \\(x\\ne0\\)."
          ],
          "answer": "\\(2\\ln|x|-3/x+C\\)"
        },
        {
          "question": "Calculează \\(\\int(2x+3)/(2x-5)\\,dx\\).",
          "steps": [
            "Scrie \\(2x+3=(2x-5)+8\\).",
            "\\(\\int[1+8/(2x-5)]dx=x+8\\cdot\\frac12\\ln|2x-5|+C\\)."
          ],
          "answer": "\\(x+4\\ln|2x-5|+C\\)"
        },
        {
          "question": "Calculează \\(\\int(x+3)/(2x+7)\\,dx\\).",
          "steps": [
            "\\(x+3=\\frac12[(2x+7)-1]\\).",
            "Integrează \\(\\frac12-\\frac1{2(2x+7)}\\)."
          ],
          "answer": "\\(x/2-\\frac14\\ln|2x+7|+C\\)"
        }
      ],
      "recall": [
        {
          "q": "Ce factor apare la \\(\\int dx/(ax+b)\\)?",
          "a": "\\(1/a\\), deoarece \\((ax+b)'=a\\)."
        },
        {
          "q": "Poți înlocui \\(\\ln|2x-5|\\) cu \\(\\ln|x-5|\\)?",
          "a": "Nu. Se poate folosi \\(\\ln|x-5/2|\\), deoarece diferența este constanta \\(\\ln2\\)."
        },
        {
          "q": "Ce faci când gradele numărătorului și numitorului sunt egale?",
          "a": "Încearcă împărțirea algebrică pentru a obține o constantă plus o fracție mai simplă."
        }
      ],
      "pitfalls": [
        "Păstrează argumentul corect al logaritmului și modulul.",
        "Nu uita factorul constant scos din numitor.",
        "Formulele se aplică separat pe intervalele care evită zerourile numitorului."
      ],
      "notes": [
        "Corecție față de foto 28: ultima linie din exercițiul cu \\(2x-5\\) scrie greșit \\(\\ln|x-5|\\). Rezultatul corect este cel de mai sus; un \\(2x-3\\) intermediar este de asemenea o eroare de copiere.",
        "Exemplul cu \\((x+3)/(2x+7)\\) este completat matematic; fotografia se oprește după descompunere."
      ],
      "group": "Analiză",
      "shortTitle": "Integrale raționale"
    },
    {
      "id": "primitive-compuse-33",
      "title": "Primitive compuse: recunoaște funcția interioară",
      "sourceIds": [
        32,
        33,
        34
      ],
      "summary": "Integrarea funcțiilor compuse este regula lanțului inversată. Identifică \\(u(x)\\), apoi verifică prezența lui \\(u'(x)\\). Compensează un factor numeric lipsă înainte de a aplica formula.",
      "rules": [
        {
          "label": "Putere compusă",
          "formula": "\\int u^m u'\\,dx=\\frac{u^{m+1}}{m+1}+C",
          "explanation": "\\(m\\ne-1\\), pe intervale pe care puterea este definită. Pentru \\(m=1\\), rezultatul este \\(u^2/2+C\\)."
        },
        {
          "label": "Radical compus",
          "formula": "\\int\\sqrt u\\,u'\\,dx=\\frac23u\\sqrt u+C",
          "explanation": "Formula puterii pentru \\(m=1/2\\); în interiorul domeniului \\(u>0\\)."
        },
        {
          "label": "Logaritm",
          "formula": "\\int\\frac{u'}{u}\\,dx=\\ln|u|+C",
          "explanation": "\\(u\\ne0\\). Recunoaște derivata numitorului în numărător."
        },
        {
          "label": "Exponențială naturală",
          "formula": "\\int e^u u'\\,dx=e^u+C",
          "explanation": "Funcția exponențială naturală se păstrează la integrare."
        },
        {
          "label": "Exponențială cu baza a",
          "formula": "\\int a^u u'\\,dx=\\frac{a^u}{\\ln a}+C",
          "explanation": "\\(a>0\\), \\(a\\ne1\\)."
        },
        {
          "label": "Sinus",
          "formula": "\\int\\sin u\\,u'\\,dx=-\\cos u+C",
          "explanation": "Derivata lui \\(-\\cos u\\) este \\(\\sin u\\,u'\\)."
        },
        {
          "label": "Cosinus",
          "formula": "\\int\\cos u\\,u'\\,dx=\\sin u+C",
          "explanation": "Derivata lui \\(\\sin u\\) este \\(\\cos u\\,u'\\)."
        },
        {
          "label": "Tangentă",
          "formula": "\\int\\tan u\\,u'\\,dx=-\\ln|\\cos u|+C",
          "explanation": "Pe intervale cu \\(\\cos u\\ne0\\)."
        },
        {
          "label": "Cotangentă",
          "formula": "\\int\\cot u\\,u'\\,dx=\\ln|\\sin u|+C",
          "explanation": "Pe intervale cu \\(\\sin u\\ne0\\)."
        },
        {
          "label": "Inversul pătratului sinusului",
          "formula": "\\int\\frac{u'}{\\sin^2u}\\,dx=-\\cot u+C",
          "explanation": "Pe intervale cu \\(\\sin u\\ne0\\)."
        },
        {
          "label": "Inversul pătratului cosinusului",
          "formula": "\\int\\frac{u'}{\\cos^2u}\\,dx=\\tan u+C",
          "explanation": "Pe intervale cu \\(\\cos u\\ne0\\)."
        },
        {
          "label": "Notația substituției",
          "formula": "du=u'(x)\\,dx",
          "explanation": "Nu omite \\(dx\\) când scrii integrala în variabila \\(x\\)."
        }
      ],
      "examples": [
        {
          "question": "\\(\\int(x^2+1)^9\\,2x\\,dx\\)",
          "steps": [
            "\\(u=x^2+1\\), \\(u'=2x\\).",
            "Aplică formula puterii cu \\(m=9\\)."
          ],
          "answer": "\\((x^2+1)^{10}/10+C\\)"
        },
        {
          "question": "\\(\\int(\\ln x)/x\\,dx\\)",
          "steps": [
            "\\(u=\\ln x\\), \\(u'=1/x\\), \\(x>0\\).",
            "Integrează \\(uu'\\)."
          ],
          "answer": "\\((\\ln x)^2/2+C\\)"
        },
        {
          "question": "\\(\\int\\sqrt{\\sin x}\\cos x\\,dx\\)",
          "steps": [
            "\\(u=\\sin x\\), \\(u'=\\cos x\\).",
            "Aplică formula radicalului pe intervale cu \\(\\sin x>0\\)."
          ],
          "answer": "\\(\\frac23\\sin x\\sqrt{\\sin x}+C\\)"
        },
        {
          "question": "\\(\\int 2x/(x^2+1)\\,dx\\)",
          "steps": [
            "\\(u=x^2+1\\), \\(u'=2x\\).",
            "\\(u>0\\) pentru orice \\(x\\in\\mathbb R\\)."
          ],
          "answer": "\\(\\ln(x^2+1)+C\\)"
        },
        {
          "question": "\\(\\int e^{x^2}2x\\,dx\\)",
          "steps": [
            "\\(u=x^2\\), \\(u'=2x\\).",
            "Aplică formula exponențialei naturale."
          ],
          "answer": "\\(e^{x^2}+C\\)"
        },
        {
          "question": "\\(\\int2^{\\sin x}\\cos x\\,dx\\)",
          "steps": [
            "\\(u=\\sin x\\), \\(u'=\\cos x\\).",
            "Baza este 2, deci împărțim la \\(\\ln2\\)."
          ],
          "answer": "\\(2^{\\sin x}/\\ln2+C\\)"
        },
        {
          "question": "\\(\\int\\sin(x^3+3x)(3x^2+3)\\,dx\\)",
          "steps": [
            "\\(u=x^3+3x\\), \\(u'=3x^2+3\\).",
            "Aplică formula sinusului."
          ],
          "answer": "\\(-\\cos(x^3+3x)+C\\)"
        },
        {
          "question": "\\(\\int x^2\\cos(x^3)\\,dx\\)",
          "steps": [
            "\\(u=x^3\\), \\(u'=3x^2\\).",
            "Introdu factorul 3 în integrală și compensează cu \\(1/3\\)."
          ],
          "answer": "\\(\\frac13\\sin(x^3)+C\\)"
        },
        {
          "question": "\\(\\int e^x\\tan(e^x)\\,dx\\)",
          "steps": [
            "\\(u=e^x\\), \\(u'=e^x\\).",
            "Aplică formula tangentei unde \\(\\cos(e^x)\\ne0\\)."
          ],
          "answer": "\\(-\\ln|\\cos(e^x)|+C\\)"
        },
        {
          "question": "\\(\\int\\cot(\\sqrt x)/\\sqrt x\\,dx\\)",
          "steps": [
            "\\(u=\\sqrt x\\), \\(u'=1/(2\\sqrt x)\\).",
            "Integrandul este \\(2u'\\cot u\\); \\(x>0\\), \\(\\sin\\sqrt x\\ne0\\)."
          ],
          "answer": "\\(2\\ln|\\sin\\sqrt x|+C\\)"
        },
        {
          "question": "\\(\\int x/\\sin^2(x^2)\\,dx\\)",
          "steps": [
            "\\(u=x^2\\), \\(u'=2x\\).",
            "Compensează cu \\(1/2\\); \\(\\sin(x^2)\\ne0\\)."
          ],
          "answer": "\\(-\\frac12\\cot(x^2)+C\\)"
        },
        {
          "question": "\\(\\int dx/\\cos^2(3x+1)\\)",
          "steps": [
            "\\(u=3x+1\\), \\(u'=3\\).",
            "Compensează cu \\(1/3\\); \\(\\cos(3x+1)\\ne0\\)."
          ],
          "answer": "\\(\\frac13\\tan(3x+1)+C\\)"
        },
        {
          "question": "\\(\\int\\sin x\\cos x\\,dx\\)",
          "steps": [
            "\\(u=\\sin x\\), \\(u'=\\cos x\\).",
            "Folosește \\(\\int uu'\\,dx=u^2/2+C\\)."
          ],
          "answer": "\\(\\sin^2x/2+C\\)"
        },
        {
          "question": "\\(\\int\\cos(3x-5)\\,dx\\)",
          "steps": [
            "\\(u=3x-5\\), \\(u'=3\\).",
            "Compensează derivata cu \\(1/3\\)."
          ],
          "answer": "\\(\\sin(3x-5)/3+C\\)"
        },
        {
          "question": "\\(\\int(x+3)/(x^2+6x+8)\\,dx\\)",
          "steps": [
            "\\(u=x^2+6x+8\\), \\(u'=2(x+3)\\).",
            "Scoate \\(1/2\\) și aplică \\(u'/u\\); \\(x\\ne-4,-2\\)."
          ],
          "answer": "\\(\\frac12\\ln|x^2+6x+8|+C\\)"
        }
      ],
      "recall": [
        {
          "q": "Care sunt cele două elemente pe care le cauți într-o integrală compusă?",
          "a": "Funcția interioară \\(u(x)\\) și derivata ei \\(u'(x)\\)."
        },
        {
          "q": "Ce faci dacă apare \\(x^2\\) lângă \\(\\cos(x^3)\\)?",
          "a": "Derivata lui \\(x^3\\) este \\(3x^2\\), deci introduci factorul 3 și scoți \\(1/3\\)."
        },
        {
          "q": "De ce \\(\\int\\cot(\\sqrt x)/\\sqrt x\\,dx\\) are un factor 2?",
          "a": "Deoarece \\((\\sqrt x)'=1/(2\\sqrt x)\\), iar integrandul conține dublul acestei derivate."
        }
      ],
      "pitfalls": [
        "Nu confunda \\(u(x)\\) cu \\(u'(x)\\).",
        "Păstrează semnul minus la primitiva sinusului și a tangentei.",
        "Verifică domeniul înainte de aplicarea formulelor cu radicali sau funcții trigonometrice la numitor."
      ],
      "notes": [
        "Fotografia 33 conține 17 forme; ultimele 5 sunt grupate în lecția următoare. Exemplul tăiat din foto 34 este omis."
      ],
      "group": "Analiză",
      "shortTitle": "Primitive compuse"
    },
    {
      "id": "compuneri-patratice-33",
      "title": "Primitive compuse cu pătrate și radicali",
      "sourceIds": [
        33,
        34
      ],
      "summary": "Recunoaște semnul dintre cele două pătrate: diferența produce un logaritm, suma produce arctangentă; un radical de forma \\(\\sqrt{a^2-u^2}\\) produce arcsinus.",
      "rules": [
        {
          "label": "Diferență de pătrate",
          "formula": "\\int\\frac{u'}{u^2-a^2}\\,dx=\\frac1{2a}\\ln\\left|\\frac{u-a}{u+a}\\right|+C",
          "explanation": "\\(a>0\\), \\(u\\ne\\pm a\\)."
        },
        {
          "label": "Sumă de pătrate",
          "formula": "\\int\\frac{u'}{u^2+a^2}\\,dx=\\frac1a\\arctan\\frac ua+C",
          "explanation": "\\(a>0\\)."
        },
        {
          "label": "Radical cu sumă",
          "formula": "\\int\\frac{u'}{\\sqrt{u^2+a^2}}\\,dx=\\ln\\left(u+\\sqrt{u^2+a^2}\\right)+C",
          "explanation": "\\(a>0\\); argumentul logaritmului este pozitiv."
        },
        {
          "label": "Radical cu diferență",
          "formula": "\\int\\frac{u'}{\\sqrt{u^2-a^2}}\\,dx=\\ln\\left|u+\\sqrt{u^2-a^2}\\right|+C",
          "explanation": "\\(a>0\\), \\(|u|>a\\)."
        },
        {
          "label": "Radical de tip cerc",
          "formula": "\\int\\frac{u'}{\\sqrt{a^2-u^2}}\\,dx=\\arcsin\\frac ua+C",
          "explanation": "\\(a>0\\), \\(|u|<a\\)."
        }
      ],
      "examples": [
        {
          "question": "\\(\\int dx/[x((\\ln x)^2-9)]\\)",
          "steps": [
            "\\(u=\\ln x\\), \\(u'=1/x\\), \\(a=3\\).",
            "Aplică formula diferenței de pătrate; \\(x>0\\), \\(x\\ne e^{\\pm3}\\)."
          ],
          "answer": "\\(\\frac16\\ln|\\frac{\\ln x-3}{\\ln x+3}|+C\\)"
        },
        {
          "question": "\\(\\int3x^2/[(x^3)^2+7^2]\\,dx\\)",
          "steps": [
            "\\(u=x^3\\), \\(u'=3x^2\\), \\(a=7\\).",
            "Aplică formula sumei de pătrate."
          ],
          "answer": "\\(\\frac17\\arctan(x^3/7)+C\\)"
        },
        {
          "question": "\\(\\int e^x/\\sqrt{e^{2x}+5}\\,dx\\)",
          "steps": [
            "\\(u=e^x\\), \\(u'=e^x\\), \\(a=\\sqrt5\\).",
            "Recunoaște radicalul cu sumă; formula este valabilă pentru orice \\(x\\in\\mathbb R\\)."
          ],
          "answer": "\\(\\ln(e^x+\\sqrt{e^{2x}+5})+C\\)"
        },
        {
          "question": "\\(\\int2x/\\sqrt{x^4-1}\\,dx\\)",
          "steps": [
            "\\(u=x^2\\), \\(u'=2x\\), \\(a=1\\).",
            "Recunoaște radicalul cu diferență; \\(|x|>1\\)."
          ],
          "answer": "\\(\\ln|x^2+\\sqrt{x^4-1}|+C\\)"
        },
        {
          "question": "\\(\\int x^3/\\sqrt{1-x^8}\\,dx\\)",
          "steps": [
            "\\(u=x^4\\), \\(u'=4x^3\\), \\(a=1\\).",
            "Compensează cu \\(1/4\\); domeniul interior este \\(|x|<1\\)."
          ],
          "answer": "\\(\\frac14\\arcsin(x^4)+C\\)"
        }
      ],
      "recall": [
        {
          "q": "Ce funcție apare pentru \\(u'/(u^2+a^2)\\)?",
          "a": "\\(\\frac1a\\arctan(u/a)+C\\)."
        },
        {
          "q": "Ce deosebește \\(\\sqrt{u^2-a^2}\\) de \\(\\sqrt{a^2-u^2}\\)?",
          "a": "Prima formă cere \\(|u|>a\\) și produce logaritm; a doua cere \\(|u|<a\\) și produce arcsinus."
        },
        {
          "q": "Ce substituție recunoști în \\(x^3/\\sqrt{1-x^8}\\)?",
          "a": "\\(u=x^4\\), deci rezultatul are factorul \\(1/4\\)."
        }
      ],
      "pitfalls": [
        "Nu schimba semnul dintre pătrate; acesta decide formula.",
        "Nu uita coeficientul \\(1/a\\) la arctangentă.",
        "Pentru radical la numitor, inegalitatea domeniului este strictă."
      ],
      "notes": [
        "Cifra 4 din ultimul exemplu a fost verificată prin inspecție mărită: rezultatul este \\((1/4)\\arcsin(x^4)\\). Foto 34 omite \\(C\\) într-un exemplu; aici este inclus."
      ],
      "group": "Analiză",
      "shortTitle": "Primitive compuse cu pătrate și radicali"
    },
    {
      "id": "studiu-primitiva-32",
      "title": "Studiul unei primitive: semn, variație, inflexiune",
      "sourceIds": [
        29,
        30,
        32
      ],
      "summary": "Pentru \\(f(x)=\\ln x/\\sqrt x\\), orice primitivă este \\(G(x)=2\\sqrt x(\\ln x-2)+C\\). Studiul lui \\(G\\) se citește din semnul lui \\(G'=f\\) și al lui \\(G''=f'\\).",
      "rules": [
        {
          "label": "Verificarea primitivei",
          "formula": "F(x)=2\\sqrt x(\\ln x-2),\\qquad F'(x)=\\frac{\\ln x}{\\sqrt x}",
          "explanation": "Domeniul este \\((0,\\infty)\\). Derivează produsul și simplifică."
        },
        {
          "label": "Toate primitivele",
          "formula": "G=F+C,\\qquad G'=f",
          "explanation": "Constanta modifică poziția verticală a graficului, dar nu variația."
        },
        {
          "label": "Variație",
          "formula": "\\operatorname{sgn}G'(x)=\\operatorname{sgn}\\ln x",
          "explanation": "\\(G\\) scade pe \\((0,1]\\) și crește pe \\([1,\\infty)\\). Minimul este \\(G(1)=C-4\\)."
        },
        {
          "label": "Derivata a doua",
          "formula": "G''(x)=\\frac{2-\\ln x}{2x\\sqrt x}",
          "explanation": "Este pozitivă pentru \\(0<x<e^2\\), nulă la \\(e^2\\) și negativă pentru \\(x>e^2\\)."
        },
        {
          "label": "Punctul de inflexiune",
          "formula": "A=(e^2,C)",
          "explanation": "\\(F(e^2)=0\\), deci \\(G(e^2)=C\\). Schimbarea semnului lui \\(G''\\) confirmă inflexiunea."
        }
      ],
      "examples": [
        {
          "question": "Arată că \\(F(x)=2\\sqrt x(\\ln x-2)\\) este o primitivă a lui \\(f(x)=\\ln x/\\sqrt x\\).",
          "steps": [
            "\\(F'=(\\ln x-2)/\\sqrt x+2\\sqrt x/x\\).",
            "\\(2\\sqrt x/x=2/\\sqrt x\\), astfel că termenii \\(-2\\) și \\(+2\\) se reduc."
          ],
          "answer": "\\(F'(x)=\\ln x/\\sqrt x=f(x)\\), pentru \\(x>0\\)."
        },
        {
          "question": "Arată că orice primitivă \\(G\\) crește pe \\([1,\\infty)\\).",
          "steps": [
            "\\(G'(x)=f(x)=\\ln x/\\sqrt x\\).",
            "\\(\\sqrt x>0\\); \\(\\ln x>0\\) pentru \\(x>1\\) și \\(\\ln1=0\\)."
          ],
          "answer": "\\(G\\) este strict crescătoare pe \\([1,\\infty)\\)."
        },
        {
          "question": "Determină punctul de inflexiune al unei primitive \\(G\\).",
          "steps": [
            "\\(G''=f'=(2-\\ln x)/(2x\\sqrt x)\\).",
            "\\(G''=0\\iff x=e^2\\), iar semnul se schimbă din plus în minus.",
            "\\(G(e^2)=2e(2-2)+C=C\\)."
          ],
          "answer": "Punctul de inflexiune este \\(A(e^2,C)\\); pentru \\(F\\), este \\(A(e^2,0)\\)."
        },
        {
          "question": "Calculează \\(f(1/e)\\) și \\(f(e)\\).",
          "steps": [
            "\\(\\ln(1/e)=-1\\), \\(\\sqrt{1/e}=1/\\sqrt e\\).",
            "\\(\\ln e=1\\)."
          ],
          "answer": "\\(f(1/e)=-\\sqrt e\\), \\(f(e)=1/\\sqrt e\\)."
        }
      ],
      "recall": [
        {
          "q": "Ce derivată folosești pentru monotonia unei primitive \\(G\\) a lui \\(f\\)?",
          "a": "\\(G'=f\\); citești semnul lui \\(f\\)."
        },
        {
          "q": "Ce derivată folosești pentru inflexiune?",
          "a": "\\(G''=f'\\); trebuie verificată schimbarea semnului."
        },
        {
          "q": "Constanta \\(C\\) schimbă abscisa punctului de inflexiune?",
          "a": "Nu. Abscisa rămâne \\(e^2\\), iar ordonata devine \\(C\\)."
        }
      ],
      "pitfalls": [
        "\\(x=0\\) nu aparține domeniului; nu este o soluție admisă.",
        "\\(G''(x_0)=0\\) singur nu garantează inflexiunea: verifică schimbarea semnului.",
        "Nu pierde constanta \\(C\\) când calculezi coordonatele unui punct de pe graficul lui \\(G\\)."
      ],
      "notes": [
        "Corecție față de foto 30: concluzia \\(A(e^2,0)\\) este corectă pentru \\(F\\), dar pentru o primitivă arbitrară \\(G=F+C\\) ordonata este \\(C\\)."
      ],
      "group": "Analiză",
      "shortTitle": "Studiul unei primitive"
    },
    {
      "id": "integrare-parti-31",
      "title": "Integrarea prin părți: alegere, repetare, ciclu",
      "sourceIds": [
        31,
        35,
        38
      ],
      "summary": "Pornește de la derivata produsului. Alege partea pe care o derivezi astfel încât integrala rămasă să fie mai simplă. Uneori aplici formula de două ori; dacă integrala inițială reapare, o notezi și o izolezi algebric.",
      "rules": [
        {
          "label": "Formula prin părți",
          "formula": "\\int f' g\\,dx=fg-\\int fg'\\,dx",
          "explanation": "Pentru funcții de clasă \\(C^1\\) pe interval; echivalent cu \\(\\int u\\,dv=uv-\\int v\\,du\\)."
        },
        {
          "label": "Polinom și exponențială",
          "formula": "\\int x^2e^x\\,dx=x^2e^x-2\\int xe^x\\,dx",
          "explanation": "Derivează polinomul; gradul scade la fiecare aplicare."
        },
        {
          "label": "Logaritm singur",
          "formula": "\\int\\ln x\\,dx=\\int1\\cdot\\ln x\\,dx",
          "explanation": "Derivează \\(\\ln x\\) și integrează 1; \\(x>0\\)."
        },
        {
          "label": "Integrala reapare",
          "formula": "I=B-I\\quad\\Longrightarrow\\quad I=\\frac B2+C",
          "explanation": "Mută integrala inițială în aceeași parte și izoleaz-o; constanta finală rămâne arbitrară."
        }
      ],
      "examples": [
        {
          "question": "\\(\\int x\\ln x\\,dx\\)",
          "steps": [
            "\\(u=\\ln x\\), \\(dv=x\\,dx\\), deci \\(du=dx/x\\), \\(v=x^2/2\\).",
            "\\(I=(x^2/2)\\ln x-\\int x/2\\,dx\\), pentru \\(x>0\\)."
          ],
          "answer": "\\((x^2/2)\\ln x-x^2/4+C\\)"
        },
        {
          "question": "\\(\\int x\\sin x\\,dx\\)",
          "steps": [
            "\\(u=x\\), \\(dv=\\sin x\\,dx\\), deci \\(du=dx\\), \\(v=-\\cos x\\).",
            "\\(I=-x\\cos x+\\int\\cos x\\,dx\\)."
          ],
          "answer": "\\(-x\\cos x+\\sin x+C\\)"
        },
        {
          "question": "\\(\\int(\\ln x)/x\\,dx\\), prin părți",
          "steps": [
            "Notează \\(I\\), alege \\(u=\\ln x\\), \\(dv=dx/x\\).",
            "\\(I=(\\ln x)^2-I\\), deci \\(2I=(\\ln x)^2\\)."
          ],
          "answer": "\\((\\ln x)^2/2+C\\); substituția \\(u=\\ln x\\) este mai scurtă."
        },
        {
          "question": "\\(\\int xe^x\\,dx\\)",
          "steps": [
            "\\(u=x\\), \\(dv=e^x\\,dx\\).",
            "\\(I=xe^x-\\int e^x\\,dx\\)."
          ],
          "answer": "\\(e^x(x-1)+C\\)"
        },
        {
          "question": "\\(\\int x^2e^x\\,dx\\)",
          "steps": [
            "Derivează \\(x^2\\) și integrează \\(e^x\\): \\(I=x^2e^x-2\\int xe^x\\,dx\\).",
            "Folosește \\(\\int xe^x\\,dx=e^x(x-1)+C\\)."
          ],
          "answer": "\\(e^x(x^2-2x+2)+C\\)"
        },
        {
          "question": "\\(\\int\\ln x\\,dx\\)",
          "steps": [
            "Scrie \\(1\\cdot\\ln x\\); alege \\(u=\\ln x\\), \\(dv=dx\\).",
            "\\(I=x\\ln x-\\int1\\,dx\\), pentru \\(x>0\\)."
          ],
          "answer": "\\(x(\\ln x-1)+C\\)"
        },
        {
          "question": "\\(\\int\\arctan x\\,dx\\)",
          "steps": [
            "\\(u=\\arctan x\\), \\(dv=dx\\).",
            "\\(I=x\\arctan x-\\int x/(x^2+1)\\,dx\\).",
            "Ultima integrală este \\(\\frac12\\ln(x^2+1)\\)."
          ],
          "answer": "\\(x\\arctan x-\\frac12\\ln(x^2+1)+C\\)"
        },
        {
          "question": "\\(\\int\\sin2x\\,dx\\), ca integrală care reapare",
          "steps": [
            "\\(A=2\\int\\sin x\\cos x\\,dx\\).",
            "Prin părți: \\(A=2\\sin^2x-A\\).",
            "\\(2A=2\\sin^2x\\)."
          ],
          "answer": "\\(\\sin^2x+C\\), echivalent cu \\(-\\frac12\\cos2x+C\\)."
        },
        {
          "question": "\\(\\int e^x\\sin x\\,dx\\)",
          "steps": [
            "\\(I=e^x\\sin x-A\\), cu \\(A=\\int e^x\\cos x\\,dx\\).",
            "Încă o aplicare: \\(A=e^x\\cos x+I\\).",
            "\\(I=e^x(\\sin x-\\cos x)-I\\); izolează \\(I\\)."
          ],
          "answer": "\\(\\frac12e^x(\\sin x-\\cos x)+C\\)"
        },
        {
          "question": "Tema din fotografie: \\(\\int\\cos^2x\\,dx\\)",
          "steps": [
            "Folosește \\(\\cos^2x=(1+\\cos2x)/2\\).",
            "Integrează cei doi termeni."
          ],
          "answer": "\\(x/2+\\sin2x/4+C\\)"
        }
      ],
      "recall": [
        {
          "q": "În \\(\\int x\\sin x\\,dx\\), ce parte derivezi?",
          "a": "Derivezi \\(x\\) și integrezi \\(\\sin x\\), pentru a obține apoi doar \\(\\int\\cos x\\,dx\\)."
        },
        {
          "q": "Cum începi \\(\\int\\ln x\\,dx\\)?",
          "a": "Scrii \\(1\\cdot\\ln x\\), integrezi 1 și derivezi \\(\\ln x\\)."
        },
        {
          "q": "Ce faci când \\(I\\) reapare în dreapta cu semn minus?",
          "a": "Aduni \\(I\\) în ambele părți și izolezi \\(2I\\)."
        }
      ],
      "pitfalls": [
        "Formula are semn minus între produs și integrala nouă.",
        "O alegere posibilă poate complica integrala; pentru \\(x\\sin x\\), nu începe prin integrarea lui \\(x\\).",
        "La integrale ciclice, păstrează semnele când înlocuiești integrala auxiliară."
      ],
      "notes": [
        "Tema cu \\(\\cos^2x\\) este rezolvată ca completare; fotografia doar o enunță.",
        "Relațiile din foto 38 dau și \\(\\int e^x\\cos x\\,dx=\\frac12e^x(\\sin x+\\cos x)+C\\)."
      ],
      "group": "Analiză",
      "shortTitle": "Integrarea prin părți"
    },
    {
      "id": "radicali-prin-parti-36",
      "title": "Integrale cu radicali: rescrie și izolează",
      "sourceIds": [
        36,
        37,
        39
      ],
      "summary": "La \\(\\int\\sqrt{x^2+a^2}\\,dx\\) sau \\(\\int\\sqrt{a^2-x^2}\\,dx\\), integrarea prin părți produce integrala inițială. Rescrierea numărătorului permite izolarea ei.",
      "rules": [
        {
          "label": "Radical cu sumă",
          "formula": "\\int\\sqrt{x^2+a^2}\\,dx=\\frac12\\left[x\\sqrt{x^2+a^2}+a^2\\ln(x+\\sqrt{x^2+a^2})\\right]+C",
          "explanation": "\\(a>0\\), \\(x\\in\\mathbb R\\). Argumentul logaritmului este pozitiv."
        },
        {
          "label": "Radical de tip cerc",
          "formula": "\\int\\sqrt{a^2-x^2}\\,dx=\\frac12\\left[x\\sqrt{a^2-x^2}+a^2\\arcsin(x/a)\\right]+C",
          "explanation": "\\(a>0\\), pe interiorul \\(|x|<a\\)."
        },
        {
          "label": "Numărător derivat",
          "formula": "\\int\\frac{x}{\\sqrt{x^2+a^2}}\\,dx=\\sqrt{x^2+a^2}+C",
          "explanation": "\\((\\sqrt{x^2+a^2})'=x/\\sqrt{x^2+a^2}\\)."
        }
      ],
      "examples": [
        {
          "question": "\\(J=\\int\\sqrt{x^2+4}\\,dx\\)",
          "steps": [
            "Prin părți: \\(J=x\\sqrt{x^2+4}-\\int x^2/\\sqrt{x^2+4}\\,dx\\).",
            "Scrie \\(x^2=(x^2+4)-4\\): \\(J=x\\sqrt{x^2+4}-J+4\\int dx/\\sqrt{x^2+4}\\).",
            "Ultima integrală este \\(\\ln(x+\\sqrt{x^2+4})\\); izolează \\(2J\\)."
          ],
          "answer": "\\(\\frac12[x\\sqrt{x^2+4}+4\\ln(x+\\sqrt{x^2+4})]+C\\)"
        },
        {
          "question": "\\(J=\\int\\sqrt{9-x^2}\\,dx\\)",
          "steps": [
            "Prin părți: \\(J=x\\sqrt{9-x^2}+\\int x^2/\\sqrt{9-x^2}\\,dx\\).",
            "Scrie \\(x^2=9-(9-x^2)\\): \\(J=x\\sqrt{9-x^2}+9\\arcsin(x/3)-J\\).",
            "Izolează \\(2J\\), pentru \\(|x|<3\\)."
          ],
          "answer": "\\(\\frac12[x\\sqrt{9-x^2}+9\\arcsin(x/3)]+C\\)"
        },
        {
          "question": "\\(\\int(x+2)/\\sqrt{x^2+2}\\,dx\\)",
          "steps": [
            "Separă \\(x/\\sqrt{x^2+2}\\) și \\(2/\\sqrt{x^2+2}\\).",
            "Prima integrală este \\(\\sqrt{x^2+2}\\); a doua este \\(2\\ln(x+\\sqrt{x^2+2})\\)."
          ],
          "answer": "\\(\\sqrt{x^2+2}+2\\ln(x+\\sqrt{x^2+2})+C\\)"
        }
      ],
      "recall": [
        {
          "q": "Cum rescrii \\(x^2\\) când numitorul este \\(\\sqrt{x^2+4}\\)?",
          "a": "\\(x^2=(x^2+4)-4\\)."
        },
        {
          "q": "Cum rescrii \\(x^2\\) când numitorul este \\(\\sqrt{9-x^2}\\)?",
          "a": "\\(x^2=9-(9-x^2)\\)."
        },
        {
          "q": "Cât este \\(\\frac12\\int u'/\\sqrt u\\,dx\\)?",
          "a": "\\(\\sqrt u+C\\), deoarece primitiva lui \\(u'/\\sqrt u\\) este \\(2\\sqrt u\\)."
        }
      ],
      "pitfalls": [
        "Păstrează semnul minus din derivata lui \\(\\sqrt{a^2-x^2}\\).",
        "Nu păstra factorul \\(1/2\\) după ce ai integrat \\(u^{-1/2}\\); el se înmulțește cu 2.",
        "La radicalul de tip cerc, formula se derivează pe interiorul domeniului."
      ],
      "notes": [
        "Corecție față de foto 37: radicalul final este \\(\\sqrt{x^2+2}\\), fără factor \\(1/2\\).",
        "Foto 39 are un semn plus greșit într-o separare intermediară; pentru \\(9-x^2\\) separarea corectă este diferență. Rezultatul final din continuarea foto 37 este corect.",
        "Foto 36 prezintă două metode echivalente; exemplul folosește varianta directă. Cifra din \\(x^2+4\\) a fost verificată după mărire."
      ],
      "group": "Analiză",
      "shortTitle": "Integrale cu radicali"
    },
    {
      "id": "raport-asimptota-40",
      "title": "Derivata unui raport și asimptota oblică",
      "sourceIds": [
        40
      ],
      "summary": "Pentru \\(f(x)=(x^3-4x)/(x^2+5)\\), derivata se factorizează ușor, iar împărțirea algebrică arată că graficul se apropie de dreapta \\(y=x\\).",
      "rules": [
        {
          "label": "Derivata raportului",
          "formula": "\\left(\\frac uv\\right)'=\\frac{u' v-uv'}{v^2}",
          "explanation": "Numitorul \\(v\\) trebuie să fie nenul; aici \\(x^2+5>0\\)."
        },
        {
          "label": "Derivata factorizată",
          "formula": "f'(x)=\\frac{(x^2-1)(x^2+20)}{(x^2+5)^2}",
          "explanation": "Numărătorul dezvoltat este \\(x^4+19x^2-20\\). Semnul derivatei este semnul lui \\(x^2-1\\)."
        },
        {
          "label": "Asimptotă oblică",
          "formula": "m=\\lim_{x\\to\\infty}\\frac{f(x)}x,\\qquad n=\\lim_{x\\to\\infty}[f(x)-mx]",
          "explanation": "Dacă limitele sunt finite și \\(m\\ne0\\), asimptota este \\(y=mx+n\\)."
        },
        {
          "label": "Împărțirea funcției",
          "formula": "f(x)=x-\\frac{9x}{x^2+5}",
          "explanation": "Diferența \\(f(x)-x\\) tinde la 0; aceasta verifică asimptota \\(y=x\\)."
        }
      ],
      "examples": [
        {
          "question": "Calculează derivata lui \\(f(x)=(x^3-4x)/(x^2+5)\\).",
          "steps": [
            "\\(u'=3x^2-4\\), \\(v'=2x\\).",
            "\\(f'=[(3x^2-4)(x^2+5)-(x^3-4x)2x]/(x^2+5)^2\\).",
            "Dezvoltă: \\(x^4+19x^2-20=(x^2-1)(x^2+20)\\)."
          ],
          "answer": "\\(f'(x)=(x^2-1)(x^2+20)/(x^2+5)^2\\)"
        },
        {
          "question": "Arată că \\(y=x\\) este asimptotă oblică la \\(+\\infty\\).",
          "steps": [
            "\\(m=\\lim f(x)/x=\\lim(x^2-4)/(x^2+5)=1\\).",
            "\\(n=\\lim[f(x)-x]=\\lim[-9x/(x^2+5)]=0\\)."
          ],
          "answer": "Asimptota este \\(y=1\\cdot x+0=x\\)."
        },
        {
          "question": "Citește variația din derivata factorizată.",
          "steps": [
            "\\(x^2+20>0\\) și \\((x^2+5)^2>0\\).",
            "\\(f'>0\\) pentru \\(|x|>1\\), \\(f'<0\\) pentru \\(|x|<1\\).",
            "\\(f(-1)=1/2\\), \\(f(1)=-1/2\\)."
          ],
          "answer": "Creștere pe \\((-\\infty,-1]\\) și \\([1,\\infty)\\); descreștere pe \\([-1,1]\\). Maxim local \\((-1,1/2)\\), minim local \\((1,-1/2)\\)."
        }
      ],
      "recall": [
        {
          "q": "Este suficient să obții \\(m=1\\) pentru a afirma că asimptota este \\(y=x\\)?",
          "a": "Nu. Trebuie verificat și \\(n=\\lim[f(x)-x]=0\\)."
        },
        {
          "q": "De ce semnul lui \\(f'\\) este semnul lui \\(x^2-1\\)?",
          "a": "Ceilalți doi factori, \\(x^2+20\\) și \\((x^2+5)^2\\), sunt pozitivi."
        },
        {
          "q": "Cum verifici rapid o asimptotă \\(y=x\\)?",
          "a": "Calculezi \\(f(x)-x\\) și arăți că tinde la 0."
        }
      ],
      "pitfalls": [
        "La derivata raportului, numitorul este la pătrat.",
        "Nu uita al doilea termen din numărător: \\(-uv'\\).",
        "O asimptotă oblică cere verificarea ambelor coeficiente \\(m\\) și \\(n\\)."
      ],
      "notes": [
        "Calculul lui \\(n\\) este completat; fotografia se oprește după \\(m=1\\). Variația este o consecință a derivatei verificate.",
        "Cifrele 4 și 5 sunt asemănătoare în scris; inspecția mărită și dezvoltarea algebrică confirmă modelul \\((x^3-4x)/(x^2+5)\\)."
      ],
      "group": "Analiză",
      "shortTitle": "Derivata unui raport și asimptota oblică"
    }
  ],
  "questions": [
    {
      "group": "Algebră",
      "topic": "Legi de compoziție",
      "q": "Ce trebuie verificat înainte de proprietățile unei legi pe M?",
      "options": [
        "Închiderea: rezultatul aparține lui M",
        "Existența unui element absorbant",
        "Numai comutativitatea",
        "Numai existența inversei"
      ],
      "answer": 0,
      "explanation": "O lege internă trebuie să asocieze oricărei perechi din M un rezultat din M. Domeniul contează înaintea tuturor proprietăților."
    },
    {
      "group": "Algebră",
      "topic": "Tabla unei legi",
      "q": "Ce proprietate se vede din simetria tablei față de diagonala principală?",
      "options": [
        "Asociativitatea",
        "Comutativitatea",
        "Existența tuturor inverselor",
        "Distributivitatea"
      ],
      "answer": 1,
      "explanation": "Simetria înseamnă că rezultatul de pe rândul x și coloana y coincide cu cel de pe rândul y și coloana x: \\(x*y=y*x\\)."
    },
    {
      "group": "Algebră",
      "topic": "Structuri algebrice",
      "q": "Ce condiții definesc un monoid?",
      "options": [
        "Lege internă asociativă și element neutru",
        "Lege internă comutativă și absorbant",
        "Numai element neutru",
        "Lege internă asociativă și toate inversele, fără neutru"
      ],
      "answer": 0,
      "explanation": "Un monoid este o mulțime cu o lege internă asociativă și un element neutru. Inversele nu sunt cerute pentru toate elementele."
    },
    {
      "group": "Algebră",
      "topic": "Structuri algebrice",
      "q": "Un grup abelian este un grup în care…",
      "options": [
        "elementul neutru este 0",
        "legea este comutativă",
        "toate elementele sunt pozitive",
        "legea este înmulțirea obișnuită"
      ],
      "answer": 1,
      "explanation": "„Abelian” adaugă comutativitatea la axiomele de grup. Neutrul și operația depind de lege."
    },
    {
      "group": "Algebră",
      "topic": "Înmulțire translatată",
      "q": "Pentru \\(x*y=(x-4)(y-4)+4\\), care este elementul neutru?",
      "options": [
        "4",
        "0",
        "5",
        "1"
      ],
      "answer": 2,
      "explanation": "Ecuația \\(x*e=x\\) devine \\((x-4)(e-4)=x-4\\). Pentru toate x rezultă \\(e-4=1\\), deci \\(e=5\\)."
    },
    {
      "group": "Algebră",
      "topic": "Înmulțire translatată",
      "q": "În aceeași lege, cât este \\(7*4\\)?",
      "options": [
        "7",
        "4",
        "0",
        "11"
      ],
      "answer": 1,
      "explanation": "Avem \\(7*4=(7-4)(4-4)+4=4\\). Elementul 4 este absorbant, nu neutru."
    },
    {
      "group": "Algebră",
      "topic": "Înmulțire translatată",
      "q": "În \\(([4,\\infty),*)\\) cu \\(x*y=(x-4)(y-4)+4\\), ce împiedică structura să fie grup?",
      "options": [
        "Nu există neutru",
        "Nu este asociativă",
        "Elementul 4 nu are invers față de neutru",
        "Nu este comutativă"
      ],
      "answer": 2,
      "explanation": "Pentru orice y, \\(4*y=4\\), niciodată 5. Legea este asociativă, comutativă și are neutrul 5, dar 4 nu este inversabil."
    },
    {
      "group": "Algebră",
      "topic": "Grup translatat",
      "q": "Pentru \\(x*y=(x+3)(y+3)-3\\), elementul neutru este…",
      "options": [
        "−3",
        "−2",
        "0",
        "1"
      ],
      "answer": 1,
      "explanation": "Transformarea \\(T(x)=x+3\\) trimite neutrul în 1, astfel \\(e+3=1\\), deci \\(e=-2\\)."
    },
    {
      "group": "Algebră",
      "topic": "Grup translatat",
      "q": "În grupul pe \\((-3,\\infty)\\), inversul lui \\(x=1\\) este…",
      "options": [
        "−1",
        "−3",
        "−11/4",
        "1/4"
      ],
      "answer": 2,
      "explanation": "Inversul este \\(x^{-1}_*=-3+1/(x+3)\\). Pentru x=1 obținem \\(-3+1/4=-11/4\\), care este >−3."
    },
    {
      "group": "Algebră",
      "topic": "Unități pe întregi",
      "q": "Pentru \\(x*y=(x+3)(y+3)-3\\) pe Z, care sunt unitățile?",
      "options": [
        "{−4,−2}",
        "{−3,−2}",
        "{−1,1}",
        "Toate numerele întregi"
      ],
      "answer": 0,
      "explanation": "Inversa rămâne întreagă numai când \\(x+3=\\pm1\\), deci \\(x=-4\\) sau \\(x=-2\\)."
    },
    {
      "group": "Algebră",
      "topic": "Lege rațională",
      "q": "Pentru \\(x*y=(x+y)/(1+xy)\\) pe \\((-1,1)\\), care este inversul lui x?",
      "options": [
        "1/x",
        "−x",
        "1−x",
        "x"
      ],
      "answer": 1,
      "explanation": "Neutrul este 0, iar \\(x*(-x)=0/(1-x^2)=0\\). Numitorul este pozitiv deoarece \\(|x|<1\\)."
    },
    {
      "group": "Algebră",
      "topic": "Lege rațională",
      "q": "Ce identitate ajută la demonstrarea închiderii în \\((-1,1)\\)?",
      "options": [
        "\\(1-(x*y)^2=\\frac{(1-x^2)(1-y^2)}{(1+xy)^2}\\)",
        "\\(1-(x*y)^2=0\\)",
        "\\(x*y=x+y\\)",
        "\\(x*y=xy\\)"
      ],
      "answer": 0,
      "explanation": "Dreapta este strict pozitivă pentru x,y în (−1,1), deci \\(|x*y|<1\\). Verificăm separat că numitorul nu se anulează."
    },
    {
      "group": "Algebră",
      "topic": "Familii de matrice",
      "q": "Pentru \\(A(a,b)=\\begin{pmatrix}a&2b\\\\b&a\\end{pmatrix}\\) cu \\(a^2-2b^2=1\\), inversa este…",
      "options": [
        "A(−a,b)",
        "A(a,−b)",
        "A(−a,−b)",
        "A(0,1)"
      ],
      "answer": 1,
      "explanation": "Determinantul este 1. Formula inversei dă \\(A(a,b)^{-1}=A(a,-b)\\), care păstrează condiția \\(a^2-2b^2=1\\)."
    },
    {
      "group": "Algebră",
      "topic": "Ecuație de tip BAC",
      "q": "Pentru \\(x*y=\\frac23(x-3)(y-3)+3\\), soluțiile ecuației \\(x*\\frac{3x}{2}=5x\\) sunt…",
      "options": [
        "1 și 9",
        "0 și 3",
        "−1 și 9",
        "3 și 5"
      ],
      "answer": 0,
      "explanation": "Membrul stâng devine \\((x-3)(x-2)+3=x^2-5x+9\\). Ecuația este \\(x^2-10x+9=0\\), deci x=1 sau x=9."
    },
    {
      "group": "Analiză",
      "topic": "Primitive",
      "q": "Ce înseamnă că F este o primitivă a lui f pe un interval I?",
      "options": [
        "F=f′",
        "F′=f pe I",
        "F este pozitivă",
        "F(0)=0"
      ],
      "answer": 1,
      "explanation": "Definiția este \\(F\\) derivabilă pe I și \\(F'(x)=f(x)\\) pentru orice x din I."
    },
    {
      "group": "Analiză",
      "topic": "Primitive",
      "q": "Două primitive ale aceleiași funcții pe un interval diferă prin…",
      "options": [
        "o funcție liniară arbitrară",
        "o constantă",
        "x²",
        "un factor multiplicativ arbitrar"
      ],
      "answer": 1,
      "explanation": "Derivata diferenței este zero. Pe un interval, diferența este constantă. Pe componente diferite ale unui domeniu, constantele pot fi diferite."
    },
    {
      "group": "Analiză",
      "topic": "Formule de bază",
      "q": "Care este \\(\\int x^{-1}\\,dx\\)?",
      "options": [
        "\\(x^0+C\\)",
        "\\(\\ln|x|+C\\)",
        "\\(-x^{-2}+C\\)",
        "\\(1+C\\)"
      ],
      "answer": 1,
      "explanation": "Cazul exponentului −1 este excepția formulei puterii. Rezultatul este logaritmul, pe intervale care nu conțin 0."
    },
    {
      "group": "Analiză",
      "topic": "Regula lanțului",
      "q": "Care este \\(\\int \\frac{2}{2x+3}\\,dx\\)?",
      "options": [
        "\\(2\\ln|2x+3|+C\\)",
        "\\(\\ln|x+3|+C\\)",
        "\\(\\ln|2x+3|+C\\)",
        "\\(\\frac12\\ln|2x+3|+C\\)"
      ],
      "answer": 2,
      "explanation": "Numărătorul este derivata numitorului. Derivata lui \\(\\ln|2x+3|\\) este \\(2/(2x+3)\\)."
    },
    {
      "group": "Analiză",
      "topic": "Regula lanțului",
      "q": "Care este \\(\\int x\\sqrt{x^2+2}\\,dx\\)?",
      "options": [
        "\\(\\frac13(x^2+2)^{3/2}+C\\)",
        "\\(\\frac23(x^2+2)^{3/2}+C\\)",
        "\\(\\sqrt{x^2+2}+C\\)",
        "\\(x\\sqrt{x^2+2}+C\\)"
      ],
      "answer": 0,
      "explanation": "Punem \\(u=x^2+2\\), \\(du=2x\\,dx\\). Astfel \\((1/2)\\int u^{1/2}du=(1/3)u^{3/2}+C\\)."
    },
    {
      "group": "Analiză",
      "topic": "Regula lanțului",
      "q": "Care este \\(\\int \\frac{x^3}{\\sqrt{1-x^8}}\\,dx\\)?",
      "options": [
        "\\(\\arcsin(x^4)+C\\)",
        "\\(\\frac14\\arcsin(x^4)+C\\)",
        "\\(\\frac18\\arcsin(x^4)+C\\)",
        "\\(\\frac14\\arctan(x^4)+C\\)"
      ],
      "answer": 1,
      "explanation": "Cu \\(u=x^4\\), \\(du=4x^3dx\\), integrala devine \\((1/4)\\int du/\\sqrt{1-u^2}\\). Formula se folosește pe intervale din (−1,1)."
    },
    {
      "group": "Analiză",
      "topic": "Integrare prin părți",
      "q": "Formula corectă a integrării prin părți este…",
      "options": [
        "\\(\\int u\\,dv=uv+\\int v\\,du\\)",
        "\\(\\int u\\,dv=uv-\\int v\\,du\\)",
        "\\(\\int u\\,dv=u'v'\\)",
        "\\(\\int u\\,dv=\\int u\\,du\\)"
      ],
      "answer": 1,
      "explanation": "Formula se obține din derivata produsului \\((uv)'=u'v+uv'\\). Semnul din fața integralei rămase este minus."
    },
    {
      "group": "Analiză",
      "topic": "Integrare prin părți",
      "q": "Care este \\(\\int\\ln x\\,dx\\), pentru x>0?",
      "options": [
        "\\(x\\ln x-x+C\\)",
        "\\(x\\ln x+C\\)",
        "\\(1/x+C\\)",
        "\\((\\ln x)^2/2+C\\)"
      ],
      "answer": 0,
      "explanation": "Alegem \\(u=\\ln x\\), \\(dv=dx\\). Obținem \\(x\\ln x-\\int1dx=x\\ln x-x+C\\)."
    },
    {
      "group": "Analiză",
      "topic": "Integrare prin părți",
      "q": "Care este \\(\\int e^x\\cos x\\,dx\\)?",
      "options": [
        "\\(e^x\\cos x+C\\)",
        "\\(\\frac{e^x}{2}(\\sin x+\\cos x)+C\\)",
        "\\(e^x\\sin x+C\\)",
        "\\(\\frac{e^x}{2}(\\sin x-\\cos x)+C\\)"
      ],
      "answer": 1,
      "explanation": "După două aplicări ale metodei reapare integrala inițială. O aducem în stânga și împărțim la 2. Derivarea verifică rezultatul."
    },
    {
      "group": "Analiză",
      "topic": "Studiu de funcție",
      "q": "Pentru \\(f(x)=\\ln x/\\sqrt x\\), unde se află maximul?",
      "options": [
        "x=1",
        "x=e",
        "x=e²",
        "x=e⁴"
      ],
      "answer": 2,
      "explanation": "Avem \\(f'(x)=(2-\\ln x)/(2x^{3/2})\\). Semnul trece din plus în minus la x=e²."
    },
    {
      "group": "Analiză",
      "topic": "Studiul unei primitive",
      "q": "Dacă \\(G'(x)=\\ln x/\\sqrt x\\), unde are G minim?",
      "options": [
        "x=1",
        "x=e",
        "x=e²",
        "x=0"
      ],
      "answer": 0,
      "explanation": "G′ este negativă pe (0,1) și pozitivă pe (1,∞). G are minim la x=1, indiferent de constanta aditivă."
    },
    {
      "group": "Analiză",
      "topic": "Studiul unei primitive",
      "q": "Pentru \\(G(x)=2\\sqrt x(\\ln x-2)+C\\), punctul de inflexiune este…",
      "options": [
        "(e²,0) pentru orice C",
        "(e²,C)",
        "(1,C)",
        "(e,0)"
      ],
      "answer": 1,
      "explanation": "G″=f′ își schimbă semnul la e². Evaluând G(e²), obținem C; ordonata 0 corespunde numai alegerii C=0."
    },
    {
      "group": "Analiză",
      "topic": "Integrale cu radicali",
      "q": "Care este \\(\\int \\frac{x}{\\sqrt{x^2+2}}\\,dx\\)?",
      "options": [
        "\\(\\frac12\\sqrt{x^2+2}+C\\)",
        "\\(\\sqrt{x^2+2}+C\\)",
        "\\(\\ln(x^2+2)+C\\)",
        "\\((x^2+2)^{3/2}+C\\)"
      ],
      "answer": 1,
      "explanation": "Derivata radicalului este \\(2x/(2\\sqrt{x^2+2})=x/\\sqrt{x^2+2}\\). Nu rămâne un factor 1/2."
    },
    {
      "group": "Analiză",
      "topic": "Asimptotă oblică",
      "q": "Pentru \\(f(x)=(x^3-4x)/(x^2+5)\\), asimptota oblică este…",
      "options": [
        "y=0",
        "y=x−9",
        "y=x",
        "y=−x"
      ],
      "answer": 2,
      "explanation": "Împărțirea dă \\(f(x)=x-9x/(x^2+5)\\). Diferența față de x tinde la 0 la ±∞."
    }
  ]
};
