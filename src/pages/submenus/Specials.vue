<template>
  <div>
    <MenuSection title="Fried Rice">
      <MenuItem
        v-for="(option, index) in menu.specials.friedRice"
        :key="`fried_rice_item_${index}`"
        v-bind="option"
      />
    </MenuSection>
    <MenuSection title="Lo Mein">
      <MenuItem
        v-for="(option, index) in menu.specials.loMein"
        :key="`lo_mein_item_${index}`"
        v-bind="option"
      />
    </MenuSection>
    <MenuSection title="Moo Shi">
      <MenuItem
        v-for="(option, index) in menu.specials.mooShi"
        :key="`moo_shi_item_${index}`"
        v-bind="option"
      />
    </MenuSection>
    <MenuSection title="Egg Foo Young">
      <MenuItem
        v-for="(option, index) in menu.specials.eggFooYoung"
        :key="`egg_foo_young_item_${index}`"
        v-bind="option"
      />
    </MenuSection>
    <MenuSection title="Chef's Specialties">
      <MenuItem
        v-for="(option, index) in menu.specials.chefsSpecialties"
        :key="`chefs_specialties_item_${index}`"
        v-bind="option"
      />
    </MenuSection>
  </div>
</template>

<script>
import { MenuSection, MenuItem } from "../../components";

export default {
  name: "Specials",
  components: {
    MenuSection,
    MenuItem,
  },
  inject: ["menu"],
}
</script>
