const templates = [
      {text: 'A $ and a $ are actually the same animal!', replacementClasses: ['animal', 'animal']},
      {text: '$ and $ are actually the same county!', replacementClasses: ['country', 'country']},
      {text: '$\'s cannot see the colour $', replacementClasses: ['animal', 'colour']},
      {text: '$ has the greatest $ of any country', replacementClasses: ['country', 'nationalMetric']},
      {text: 'Despite once being native, the $ is no longer found in $', replacementClasses: ['animal', 'country']},
      {text: 'Once you adjust for $, $ has the highest consumption of $ in the world',replacementClasses: ['nationalMetric', 'country', 'food']}
];

const lists = {
  country: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Antarctic Territory', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Canton and Enderbury Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos [Keeling] Islands', 'Colombia', 'Comoros', 'Congo - Brazzaville', 'Congo - Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Côte d’Ivoire', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Dronning Maud Land', 'East Germany', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'French Southern and Antarctic Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and McDonald Islands', 'Honduras', 'Hong Kong SAR China', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Johnston Island', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau SAR China', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Metropolitan France', 'Mexico', 'Micronesia', 'Midway Islands', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar [Burma]', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'Neutral Zone', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'North Korea', 'North Vietnam', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pacific Islands Trust Territory', 'Pakistan', 'Palau', 'Palestinian Territories', 'Panama', 'Panama Canal Zone', 'Papua New Guinea', 'Paraguay', 'People\'s Democratic Republic of Yemen', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Réunion', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'São Tomé and Príncipe', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'U.S. Minor Outlying Islands', 'U.S. Miscellaneous Pacific Islands', 'U.S. Virgin Islands', 'Uganda', 'Ukraine', 'Union of Soviet Socialist Republics', 'United Arab Emirates', 'United Kingdom', 'United States', 'Unknown or Invalid Region', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wake Island', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe', 'Åland Islands'],
  animal: ["canidae", "felidae", "cat", "cattle", "dog", "donkey", "goat", "guinea pig", "horse", "pig", "rabbit", "fancy rat varieties", "laboratory rat strains", "sheep breeds", "water buffalo breeds", "chicken breeds", "duck breeds", "goose breeds", "pigeon breeds", "turkey breeds", "aardvark", "aardwolf", "african buffalo", "african elephant", "african leopard", "albatross", "alligator", "alpaca", "american buffalo (bison)", "american robin", "amphibian", "list", "anaconda", "angelfish", "anglerfish", "ant", "anteater", "antelope", "antlion", "ape", "aphid", "arabian leopard", "arctic fox", "arctic wolf", "armadillo", "arrow crab", "asp", "ass (donkey)", "baboon", "badger", "bald eagle", "bandicoot", "barnacle", "barracuda", "basilisk", "bass", "bat", "beaked whale", "bear", "list", "beaver", "bedbug", "bee", "beetle", "bird", "list", "bison", "blackbird", "black panther", "black widow spider", "blue bird", "blue jay", "blue whale", "boa", "boar", "bobcat", "bobolink", "bonobo", "booby", "box jellyfish", "bovid", "buffalo, african", "buffalo, american (bison)", "bug", "butterfly", "buzzard", "camel", "canid", "cape buffalo", "capybara", "cardinal", "caribou", "carp", "cat", "list", "catshark", "caterpillar", "catfish", "cattle", "list", "centipede", "cephalopod", "chameleon", "cheetah", "chickadee", "chicken", "list", "chimpanzee", "chinchilla", "chipmunk", "clam", "clownfish", "cobra", "cockroach", "cod", "condor", "constrictor", "coral", "cougar", "cow", "coyote", "crab", "crane", "crane fly", "crawdad", "crayfish", "cricket", "crocodile", "crow", "cuckoo", "cicada", "damselfly", "deer", "dingo", "dinosaur", "list", "dog", "list", "dolphin", "donkey", "list", "dormouse", "dove", "dragonfly", "dragon", "duck", "list", "dung beetle", "eagle", "earthworm", "earwig", "echidna", "eel", "egret", "elephant", "elephant seal", "elk", "emu", "english pointer", "ermine", "falcon", "ferret", "finch", "firefly", "fish", "flamingo", "flea", "fly", "flyingfish", "fowl", "fox", "frog", "fruit bat", "gamefowl", "list", "galliform", "list", "gazelle", "gecko", "gerbil", "giant panda", "giant squid", "gibbon", "gila monster", "giraffe", "goat", "list", "goldfish", "goose", "list", "gopher", "gorilla", "grasshopper", "great blue heron", "great white shark", "grizzly bear", "ground shark", "ground sloth", "grouse", "guan", "list", "guanaco", "guineafowl", "list", "guinea pig", "list", "gull", "guppy", "haddock", "halibut", "hammerhead shark", "hamster", "hare", "harrier", "hawk", "hedgehog", "hermit crab", "heron", "herring", "hippopotamus", "hookworm", "hornet", "horse", "list", "hoverfly", "hummingbird", "humpback whale", "hyena", "iguana", "impala", "irukandji jellyfish", "jackal", "jaguar", "jay", "jellyfish", "junglefowl", "kangaroo", "kangaroo mouse", "kangaroo rat", "kingfisher", "kite", "kiwi", "koala", "koi", "komodo dragon", "krill", "ladybug", "lamprey", "landfowl", "land snail", "lark", "leech", "lemming", "lemur", "leopard", "leopon", "limpet", "lion", "lizard", "llama", "lobster", "locust", "loon", "louse", "lungfish", "lynx", "macaw", "mackerel", "magpie", "mammal", "manatee", "mandrill", "manta ray", "marlin", "marmoset", "marmot", "marsupial", "marten", "mastodon", "meadowlark", "meerkat", "mink", "minnow", "mite", "mockingbird", "mole", "mollusk", "mongoose", "monitor lizard", "monkey", "moose", "mosquito", "moth", "mountain goat", "mouse", "mule", "muskox", "narwhal", "newt", "new world quail", "nightingale", "ocelot", "octopus", "old world quail", "opossum", "orangutan", "orca", "ostrich", "otter", "owl", "ox", "panda", "panther", "panthera hybrid", "parakeet", "parrot", "parrotfish", "partridge", "peacock", "peafowl", "pelican", "penguin", "perch", "peregrine falcon", "pheasant", "pig", "pigeon", "list", "pike", "pilot whale", "pinniped", "piranha", "planarian", "platypus", "polar bear", "pony", "porcupine", "porpoise", "portuguese man o' war", "possum", "prairie dog", "prawn", "praying mantis", "primate", "ptarmigan", "puffin", "puma", "python", "quail", "quelea", "quokka", "rabbit", "list", "raccoon", "rainbow trout", "rat", "rattlesnake", "raven", "ray (batoidea)", "ray (rajiformes)", "red panda", "reindeer", "reptile", "rhinoceros", "right whale", "roadrunner", "rodent", "rook", "rooster", "roundworm", "saber-toothed cat", "sailfish", "salamander", "salmon", "sawfish", "scale insect", "scallop", "scorpion", "seahorse", "sea lion", "sea slug", "sea snail", "shark", "list", "sheep", "list", "shrew", "shrimp", "silkworm", "silverfish", "skink", "skunk", "sloth", "slug", "smelt", "snail", "snake", "list", "snipe", "snow leopard", "sockeye salmon", "sole", "sparrow", "sperm whale", "spider", "spider monkey", "spoonbill", "squid", "squirrel", "starfish", "star-nosed mole", "steelhead trout", "stingray", "stoat", "stork", "sturgeon", "sugar glider", "swallow", "swan", "swift", "swordfish", "swordtail", "tahr", "takin", "tapir", "tarantula", "tarsier", "tasmanian devil", "termite", "tern", "thrush", "tick", "tiger", "tiger shark", "tiglon", "toad", "tortoise", "toucan", "trapdoor spider", "tree frog", "trout", "tuna", "turkey", "list", "turtle", "tyrannosaurus", "urial", "vampire bat", "vampire squid", "vicuna", "viper", "vole", "vulture", "wallaby", "walrus", "wasp", "warbler", "water boa", "water buffalo", "weasel", "whale", "whippet", "whitefish", "whooping crane", "wildcat", "wildebeest", "wildfowl", "wolf", "wolverine", "wombat", "woodpecker", "worm", "wren", "xerinae", "x-ray fish", "yak", "yellow perch", "zebra", "zebra finch", "animals by number of neurons", "animals by size", "common household pests", "common names of poisonous animals", "alpaca", "bali cattle", "cat", "cattle", "chicken", "dog", "domestic bactrian camel", "domestic canary", "domestic dromedary camel", "domestic duck", "domestic goat", "domestic goose", "domestic guineafowl", "domestic hedgehog", "domestic pig", "domestic pigeon", "domestic rabbit", "domestic silkmoth", "domestic silver fox", "domestic turkey", "donkey", "fancy mouse", "fancy rat", "lab rat", "ferret", "gayal", "goldfish", "guinea pig", "guppy", "horse", "koi", "llama", "ringneck dove", "sheep", "siamese fighting fish", "society finch", "yak", "water buffalo"],
  colour: ['red','green','blue','yellow','orange','purple','white','black'],
  nationalMetric :['population','population density','GDP','GDP / capita','death rate','birth rate'],
  food :['apples', 'bacon', 'baked beans', 'basil', 'beer', 'biscuits', 'bloody mary', 'burritos', 'cake', 'calzone', 'cheese', 'chicken', 'chinese food', 'chips', 'chocolate', 'cider', 'coffee', 'cola', 'cornettos', 'cottage pie', 'courgettes', 'couscous', 'cream', 'crisps', 'crumbs off of the floor', 'curry', 'custard', 'dried fruit', 'fish fingers', 'ginger', 'ham', 'jam', 'lamb', 'lasagna', 'leeks', 'lemondade', 'lobster thermadore', 'marshmallows', 'mushrooms', 'mussels', 'oysters', 'pasta', 'peanuts', 'pears', 'pizza', 'popcorn', 'pork', 'potatoes', 'puff pastry', 'risotto', 'rum', 'salami', 'salmon', 'spaghetti', 'steak', 'stew', 'tea', 'tomatoes', 'veal', 'vodka']

};

function rand(max) {
  return Math.floor(Math.random() * max)
}


function getFact() {
  const template = templates[rand(templates.length)];

  template.replacementClasses.forEach(r => {
    const replacement = lists[r][rand(lists[r].length)];
    template.text = template.text.replace("$"/*  */, replacement);
  });

  return template.text;
}
