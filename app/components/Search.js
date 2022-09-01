import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg md:flex items-center gap-2 lg:min-w-[650px] mx-4 hidden">
            <select name="product_cat" className="outline-none bg-transparent">
                <option value="0" defaultValue>All Categories</option>
                <option className="level-0" value="breads-sweets">Breads Sweets</option>
                <option className="level-1" value="chocolate">&nbsp;&nbsp;&nbsp;Chocolate</option>
                <option className="level-1" value="cupcakes">&nbsp;&nbsp;&nbsp;Cupcakes</option>
                <option className="level-1" value="fruit-filling">&nbsp;&nbsp;&nbsp;Fruit Filling</option>
                <option className="level-1" value="stouffer">&nbsp;&nbsp;&nbsp;Stouffer</option>
                <option className="level-0" value="coffees-and-teas">Coffees and Teas</option>
                <option className="level-1" value="fizzy-drinks">&nbsp;&nbsp;&nbsp;Fizzy Drinks</option>
                <option className="level-1" value="hot-drinks">&nbsp;&nbsp;&nbsp;Hot Drinks</option>
                <option className="level-1" value="tea-coffee">&nbsp;&nbsp;&nbsp;Tea &amp; Coffee</option>
                <option className="level-1" value="water">&nbsp;&nbsp;&nbsp;Water</option>
                <option className="level-0" value="foodcupboard">Food Cupboard</option>
                <option className="level-1" value="breakfast-cereals">&nbsp;&nbsp;&nbsp;Breakfast Cereals</option>
                <option className="level-1" value="chocolate-sweets">&nbsp;&nbsp;&nbsp;Chocolate &amp; Sweets</option>
                <option className="level-1" value="crisps-snacks-nuts">&nbsp;&nbsp;&nbsp;Crisps, Snacks &amp; Nuts</option>
                <option className="level-1" value="tins-cans">&nbsp;&nbsp;&nbsp;Tins &amp; Cans</option>
                <option className="level-0" value="frozen-seafoods">Frozen Seafoods</option>
                <option className="level-1" value="buitoni">&nbsp;&nbsp;&nbsp;Buitoni</option>
                <option className="level-1" value="buttercream">&nbsp;&nbsp;&nbsp;Buttercream</option>
                <option className="level-1" value="freshly">&nbsp;&nbsp;&nbsp;Freshly</option>
                <option className="level-1" value="hot-pockets">&nbsp;&nbsp;&nbsp;Hot Pockets</option>
                <option className="level-0" value="fruits-vegetables">Fruits &amp; Vegetables</option>
                <option className="level-1" value="fruit">&nbsp;&nbsp;&nbsp;Fruit</option>
                <option className="level-1" value="meat-poultry">&nbsp;&nbsp;&nbsp;Meat &amp; Poultry</option>
                <option className="level-1" value="milk-butter-eggs">&nbsp;&nbsp;&nbsp;Milk, Butter &amp; Eggs</option>
                <option className="level-1" value="vegetables">&nbsp;&nbsp;&nbsp;Vegetables</option>
                <option className="level-0" value="milks-and-dairies">Milks and Dairies</option>
                <option className="level-1" value="bouncers">&nbsp;&nbsp;&nbsp;Bouncers</option>
                <option className="level-1" value="nursery">&nbsp;&nbsp;&nbsp;Nursery</option>
                <option className="level-1" value="pushchairs">&nbsp;&nbsp;&nbsp;Pushchairs</option>
                <option className="level-1" value="toys">&nbsp;&nbsp;&nbsp;Toys</option>
                <option className="level-0" value="pet-foods">Pet Foods</option>
                <option className="level-1" value="cookware">&nbsp;&nbsp;&nbsp;Cookware</option>
                <option className="level-1" value="cutlery">&nbsp;&nbsp;&nbsp;Cutlery</option>
                <option className="level-1" value="dinnerware">&nbsp;&nbsp;&nbsp;Dinnerware</option>
                <option className="level-1" value="utensils">&nbsp;&nbsp;&nbsp;Utensils</option>
                <option className="level-0" value="raw-meats">Raw Meats</option>
                <option className="level-1" value="chinese">&nbsp;&nbsp;&nbsp;Chinese</option>
                <option className="level-1" value="indian">&nbsp;&nbsp;&nbsp;Indian</option>
                <option className="level-1" value="italian">&nbsp;&nbsp;&nbsp;Italian</option>
                <option className="level-1" value="traditional-british">&nbsp;&nbsp;&nbsp;Traditional British</option>
                <option className="level-0" value="wines-alcohol-drinks">Wines &amp; Alcohol Drinks</option>
                <option className="level-1" value="bottle">&nbsp;&nbsp;&nbsp;Bottle</option>
                <option className="level-1" value="carlsberg">&nbsp;&nbsp;&nbsp;Carlsberg</option>
                <option className="level-1" value="fruit-purees">&nbsp;&nbsp;&nbsp;Fruit Purees</option>
                <option className="level-1" value="heineken">&nbsp;&nbsp;&nbsp;Heineken</option>
            </select>
            <input
                type="text"
                placeholder="I'm searching for..."
                className="outline-none bg-transparent border-l border-gray-400 px-4 flex-1"
            />
            <AiOutlineSearch className="text-2xl text-gray-600" />
        </div>
    )
}

export default Search