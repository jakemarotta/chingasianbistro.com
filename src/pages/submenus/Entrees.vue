<template>
  <div class="menu-entrees">
    <b-navbar toggleable="md" class="shortcuts flex-wrap">
      <b-navbar-nav pills class="flex-wrap justify-content-around align-items-center w-100">
        <b-nav-item href="#lunch" class="mx-2">
          Lunch
        </b-nav-item>
        <b-nav-item href="#beef" class="mx-2">
          Beef
        </b-nav-item>
        <b-nav-item href="#pork" class="mx-2">
          Pork
        </b-nav-item>
        <b-nav-item href="#vegetable" class="mx-2">
          Vegetable
        </b-nav-item>
        <b-nav-item href="#seafood" class="mx-2">
          Seafood
        </b-nav-item>
        <b-nav-item href="#chicken" class="mx-2">
          Chicken
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <div class="lunch-specials mt-3">  
      <div class="mb-3">
        <h4 class="text-center"><a id="lunch"></a>Lunch Menu Specials</h4>
        <h6 class="text-center">Served from {{menu.entrees.lunchSchedule.startTime}} - {{menu.entrees.lunchSchedule.endTime}}, Tue - Sat</h6>
        <h6 class="text-center">Served from {{menu.entrees.lunchSchedule.sundayStartTime}} - {{menu.entrees.lunchSchedule.sundayEndTime}}, Sun</h6>
        <h6 class="text-center">All lunches priced at {{menu.entrees.lunchSchedule.price}}</h6>
      </div>

      <div class="d-flex flex-wrap justify-content-center align-items-center text-center px-4 mb-3">
        <div class="lunch-list">
          <div 
            class="lunch-list-item mx-3"
            v-for="(item, index) in menu.entrees.lunchList" 
            :key="`lunch_list_item_${index}`"
          >
            • {{item.title}}
            <img
              v-if="item.spicy"
              src="../../assets/menu/hotpepper.png"
              alt="Hot &amp; Spicy"
              class="ml-1 mb-1"
            />
          </div>
        </div>
      </div>
      <div>
        <MenuItem
          v-for="(option, index) in menu.entrees.lunchOptions"
          :key="`lunch_option_${index}`"
          :title="option.title"
          :price="option.options"
          :spicy="option.spicy"
        />
      </div>
    </div>

    <MenuSection title="Beef Entrees" anchorId="beef">
      <MenuItem
        v-for="(entree, index) in menu.entrees.beef"
        :key="`beef_entree_${index}`"
        v-bind="entree"
      />
    </MenuSection>
    <MenuSection title="Pork Entrees" anchorId="pork">
      <MenuItem
        v-for="(entree, index) in menu.entrees.pork"
        :key="`beef_entree_${index}`"
        v-bind="entree"
      />
    </MenuSection>
    <MenuSection title="Vegetable Entrees" anchorId="vegetable">
      <MenuItem
        v-for="(entree, index) in menu.entrees.vegetable"
        :key="`beef_entree_${index}`"
        v-bind="entree"
      />
    </MenuSection>
    <MenuSection title="Seafood Entrees" anchorId="seafood">
      <MenuItem
        v-for="(entree, index) in menu.entrees.seafood"
        :key="`beef_entree_${index}`"
        v-bind="entree"
      />
    </MenuSection>
    <MenuSection title="Chicken Entrees" anchorId="chicken">
      <MenuItem
        v-for="(entree, index) in menu.entrees.chicken"
        :key="`beef_entree_${index}`"
        v-bind="entree"
      />
    </MenuSection>
  </div>
</template>

<script>
import { MenuSection, MenuItem } from "../../components";

export default {
  name: "Entrees",
  components: {
    MenuSection,
    MenuItem,
  },
  inject: ["menu"],
}
</script>

<style scoped>
.menu-entrees .shortcuts a {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: underline;
}
@media only screen and (max-width: 992px) {
  .menu-entrees .shortcuts {
    display: none;
  }
}
.menu-entrees .lunch-specials {
  padding: 0 1em;
}
.menu-entrees .lunch-specials .lunch-list .lunch-list-item {
  white-space: nowrap;
  display: inline-block;
}
</style>