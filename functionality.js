// Dynamically change content on spotlight modal based on state selected on map
// Intializing properties of object (state) 
function State(name, building, architect, year, location, description1, description2, image, link) {
    this.name = name;
    this.building = building;
    this.architect = architect;
    this.year = year;
    this.location = location;
    this.description1 = description1;
    this.description2 = description2;
    this.image = image;
    this.link = link;
}

// Creating new instances of State
var Pennsylvania = new State ("Pennsylvania", "Fallingwater", "Frank Lloyd Wright (1867-1959)", "1935", "Outside of Pittsburgh","Fallingwater is a house designed for the Kaufmann family, owners of Pittsburgh’s largest department store. One of Wright’s most widely acclaimed works, Fallingwater exemplifies his philosophy of organic architecture: the harmonious union of art and nature.","Fallingwater is owned and operated by the Conservancy and open to the public to tour as a museum. It is surrounded by 5,100 acres of natural land, streams and trails known as the Bear Run Nature Reserve. On July 10, 2019, UNESCO inscribed Fallingwater and seven other Frank Lloyd Wright-designed buildings to the World Heritage List. Fallingwater is the only major Wright work to come into the public domain with its setting, artwork and original Wright-designed furnishings intact.", "assets/PA Big Frame 1.png", "https://fallingwater.org");
var Texas = new State ("Texas", "Kimbell Art Museum", "Louis I. Kahn (1867-1959)", "1972", "Fort Worth", "The Kimbell Art Museum's building is widely regarded as one of the outstanding architectural achievements of the modern era.","Kahn designed a building in which “light is the theme.” Natural light enters through narrow plexiglass skylights along the top of cycloid barrel vaults and is diffused by wing-shaped pierced-aluminum reflectors that hang below, giving a silvery gleam to the smooth concrete of the vault surfaces and providing a perfect, subtly fluctuating illumination for the works of art.Though thoroughly modern in its lack of ornament or revivalist detail, the building suggests the grand arches and vaults of Roman architecture, a source of inspiration that Kahn himself acknowledged.", "assets/TX Big Frame 1.png", "https://kimbellart.org/art-architecture/architecture/kahn-building");
var California = new State ("California", "Eames House", "Charles and Ray Eames (-1978)", "1949", "Los Angeles","The Eames House, also known as Case Study House No. 8, is a landmark of mid-20th century modern architecture located in the Pacific Palisades neighborhood of Los Angeles. It was designed and constructed by husband-and-wife to serve as their home and studio. They lived in their home until their deaths: Charles in 1978 and Ray, ten years to the day, in 1988.","Charles described the house as unselfconscious. There is a sense of that “way-it-should-be-ness”. Charles and Ray designed a house specifically to meet their needs, but they were those universal needs that we all share as humans. They believed in the honest use of materials and straightforward connections. The details WERE the product!", "assets/CA Big Frame 1.png", "https://eamesfoundation.org/house/eames-house/");
var Oregon = new State ("Oregon", "Portland Japanese Garden", "Kengo Kuma (1954-)", "2017", "Portland","Portland Japanese Garden's new Cultural Village is a modest, human-scaled set of buildings arranged around a courtyard plaza, whose fourth side is the existing, untouched gardens from the 1960s. The project is a village positioned along a journey from the city to the top of the hill, a form of modern monzenmachi wherein the pilgrimage pays homage to the spirit of nature.","There are four buildings, each with its own means of merging into the dramatic slopes of the terrain, in combination with the tall vertical lines of the Pacific Northwest conifers: the Ticketing Pavilion floating above gentle stepped ponds, the Tea Cafe hovering above the ravine, and the main Village House and Garden House.", "assets/OR Big Frame 1.png", "https://japanesegarden.org/garden-spaces/");
var Illinois = new State ("Illinois", "Crown Hall", "Mies van der Rohe", "1956", "Chicago", "Nothing better expresses Ludwig Mies van der Rohe's philosophy than S. R. Crown Hall, home to the Illinois Institute of Technology's College of Architecture, and a modern masterpiece that Time magazine calls one of the world's most influential, inspiring and astonishing structures.", "Crown Hall cohesively represents Mies's architectural concepts and theories in their most complete and mature form. A National Historic Landmark, Crown Hall is a straightforward expression of construction and materiality, which allows the structure to transcend into art. Its refinement and innovation place it among the most distinguished buildings of its age and define its importance in the history of architecture.", "assets/IL Big Frame 1.png", "https://arch.iit.edu/about/buildings");
var NewYork = new State ("New York", "WTC Transportation Hub", "Santiago Calatrava", "2016", "New York City", "Central to this building is a 335-foot-long skylight, designed to allow the “Way of Light” to pass through the main hub of the transit hall at 10:28 a.m.—the moment that the North Tower of the WTC collapsed on September 11, 2001. Symbolizing the light that continues to shine through after the darkness of the tragedy, the Oculus opening allows light to fill the massive space as a memorial to the attacks on the twin towers.", "From its initial design through to its final completion, the project proved to be arduous for its symbolism, its physical complexity, as well as for the number of commuters it would need to accommodate.", "assets/NY Big Frame 1.png", "https://calatrava.com/projects/world-trade-center-transportation-hub-new-york.html");


var states_list = [Oregon, California, Texas, Pennsylvania, Illinois, NewYork]

// Changing content on spotlight modal based on which state is clicked on the map
function changeSpotlight(id) {
    document.getElementById("building-state").textContent = states_list[id].name;
    document.getElementById("building-name").textContent = states_list[id].building;
    document.getElementById("building-architect").textContent = states_list[id].architect;
    document.getElementById("building-year").textContent = states_list[id].year;
    document.getElementById("building-location").textContent = states_list[id].location;
    document.getElementById("building-description-1").textContent = states_list[id].description1;
    document.getElementById("building-description-2").textContent = states_list[id].description2;
    document.getElementById("main-image").src= states_list[id].image;
    document.getElementById("building-link").href= states_list[id].link;
}
