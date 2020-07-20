const TestData = [
    {
        title: 'Queen in Hiding (The Nine Realms, Bk. 1)',
        author: 'Kozloff, Sarah',
        rating: 4.2, format: '(Paperback)',
        listPrice: 17.99,
        salePrice: 7.19,
        url: 'https: //bookoutlet.ca/Store/Details/9781250168542B/queen-in-hiding-the-nine-realms-bk-1'
    },
    {
        title: 'The Martian Chronicles',
        author: 'Bradbury, Ray',
        rating: 4.2, format: '(Pocket Books)',
        listPrice: 10.99,
        salePrice: 4.15,
        url: 'https: //bookoutlet.ca/Store/Details/9781451678192B/the-martian-chronicles'
    },
    {
        title: 'Queen of Raiders (The Nine Realms, Bk. 2)',
        author: 'Kozloff, Sarah',
        rating: 4.2, format: '(Paperback)',
        listPrice: 22.99,
        salePrice: 7.19,
        url: 'https: //bookoutlet.ca/Store/Details/9781250168566B/queen-of-raiders-the-nine-realms-bk-2'
    },
    {
        title: 'Year One (Chronicles of the One, Bk. 1)',
        author: 'Roberts, Nora',
        rating: 4.2, format: '(Paperback)',
        listPrice: 24.99,
        salePrice: 8.95,
        url: 'https: //bookoutlet.ca/Store/Details/9781250122964B/year-one-chronicles-of-the-one-bk-1'
    },
    {
        title: 'The Night Tiger',
        author: 'Choo, Yangsze',
        rating: 4.2, format: '(Paperback)',
        listPrice: 24.99,
        salePrice: 9.51,
        url: 'https: //bookoutlet.ca/Store/Details/9781250175465B/the-night-tiger'
    },
    {
        title: "The Time Traveler's Wife",
        author: 'Niffenegger, Audrey',
        rating: 4.2, format: '(Paperback)',
        listPrice: 21.99,
        salePrice: 8.15,
        url: 'https: //bookoutlet.ca/Store/Details/9781476764832B/the-time-travelers-wife'
    },
    {
        title: 'Dead Astronauts',
        author: 'VanderMeer, Jeff',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 36.99,
        salePrice: 9.19,
        url: 'https: //bookoutlet.ca/Store/Details/9780374276805B/dead-astronauts'
    },
    {
        title: 'Darkdawn (Nevernight Chronicle, Bk. 3)',
        author: 'Kristoff, Jay',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 39.99,
        salePrice: 10.79,
        url: 'https: //bookoutlet.ca/Store/Details/9781250073044B/darkdawn-nevernight-chronicle-bk-3'
    },
    {
        title: 'Beasts of Extraordinary Circumstance',
        author: 'Lang, Ruth Emmie',
        rating: 4.2, format: '(Paperback)',
        listPrice: 22.99,
        salePrice: 6.07,
        url: 'https: //bookoutlet.ca/Store/Details/9781250306661B/beasts-of-extraordinary-circumstance'
    },
    {
        title: 'Mapping the Interior',
        author: 'Jones, Stephen Graham',
        rating: 4.2, format: '(Paperback)',
        listPrice: 14.99,
        salePrice: 5.4,
        url: 'https: //bookoutlet.ca/Store/Details/9780765395108B/mapping-the-interior'
    },
    {
        title: 'Before the Storm (World of Warcraft)',
        author: 'Golden, Christie',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 37.99,
        salePrice: 10.79,
        url: 'https: //bookoutlet.ca/Store/Details/9780399594090B/before-the-storm-world-of-warcraft'
    },
    {
        title: 'Shroud of Eternity: Sisters of Darkness (The Nicci Chronicles, Bk. 2)',
        author: 'Goodkind, Terry',
        rating: 4.2, format: '(Pocket Books)',
        listPrice: 13.99,
        salePrice: 3.99,
        url: 'https: //bookoutlet.ca/Store/Details/9780765388254B/shroud-of-eternity-sisters-of-darkness-the-ni'
    },
    {
        title: 'Secrets of the Chocolate House (Found Things, Bk. 2)',
        author: 'Brackston, Paula',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 37.99,
        salePrice: 9.19,
        url: 'https: //bookoutlet.ca/Store/Details/9781250072443B/secrets-of-the-chocolate-house-found-things-b'
    },
    {
        title: 'Dark Illusion (Carpathian)',
        author: 'Feehan, Christine',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 36.99,
        salePrice: 11.91,
        url: 'https: //bookoutlet.ca/Store/Details/9781984803467B/dark-illusion-carpathian'
    },
    {
        title: "Gwendy's Magic Feather (Gwendy's Button Box Trilogy, Bk. 2)",
        author: 'Chizmar, Richard',
        rating: 4.2, format: '(Paperback)',
        listPrice: 21.99,
        salePrice: 8.36,
        url: 'https: //bookoutlet.ca/Store/Details/9781982139728B/gwendys-magic-feather-gwendys-button-box-tril'
    },
    {
        title: 'Timeless  (Generations, Bk. 1)',
        author: 'Salvatore, R. A.',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 37.99,
        salePrice: 10.15,
        url: 'https: //bookoutlet.ca/Store/Details/9780062688590B/timeless-generations-bk-1'
    },
    {
        title: 'The Rook',
        author: "O'Malley, Daniel",
        rating: 4.2, format: '(Paperback)',
        listPrice: 21.99,
        salePrice: 6.55,
        url: 'https: //bookoutlet.ca/Store/Details/9780316098809B/the-rook'
    },
    {
        title: 'Red Queen (The Chronicles of Alice)',
        author: 'Henry, Christina',
        rating: 4.2, format: '(Paperback)',
        listPrice: 20.99,
        salePrice: 6.07,
        url: 'https: //bookoutlet.ca/Store/Details/9780425266809B/red-queen-the-chronicles-of-alice'
    },
    {
        title: 'The Bitter Kingdom (The Girl of Fire and Thorns, Bk. 3)',
        author: 'Carson, Rae',
        rating: 4.2, format: '(Paperback)',
        listPrice: 13.99,
        salePrice: 4.55,
        url: 'https: //bookoutlet.ca/Store/Details/9780062026569B/the-bitter-kingdom-the-girl-of-fire-and-thorn'
    },
    {
        title: 'Faerie Knitting: 14 Tales of Love and Magic',
        author: 'Hoffman, Alice',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 36.99,
        salePrice: 10.79,
        url: 'https: //bookoutlet.ca/Store/Details/9781507206553B/faerie-knitting-14-tales-of-love-and-magic'
    },
    {
        title: 'The Lost Queen (Bk. 1)',
        author: 'Pike, Signe',
        rating: 4.2, format: '(Paperback)',
        listPrice: 22.99,
        salePrice: 6.07,
        url: 'https: //bookoutlet.ca/Store/Details/9781501191428B/the-lost-queen-bk-1'
    },
    {
        title: 'The Unspoken Name (The Serpent Gates, Bk. 1)',
        author: 'Larkwood, A. K.',
        rating: 4.2, format: '(Hardcover)',
        listPrice: 35.99,
        salePrice: 9.51,
        url: 'https: //bookoutlet.ca/Store/Details/9781250238900B/the-unspoken-name-the-serpent-gates-bk-1'
    },
    {
        title: 'Bay of Sighs (Guardians Trilogy, Bk. 2)',
        author: 'Roberts, Nora',
        rating: 4.2, format: '(Paperback)',
        listPrice: 22.99,
        salePrice: 6.07,
        url: 'https: //bookoutlet.ca/Store/Details/9780425280119B/bay-of-sighs-guardians-trilogy-bk-2'
    },
    {
        title: 'Island of Glass (Guardians Trilogy, Bk. 3)',
        author: 'Roberts, Nora',
        rating: 4.2, format: '(Paperback)',
        listPrice: 22.99,
        salePrice: 6.95,
        url: 'https: //bookoutlet.ca/Store/Details/9780425280126B/island-of-glass-guardians-trilogy-bk-3'
    }
]