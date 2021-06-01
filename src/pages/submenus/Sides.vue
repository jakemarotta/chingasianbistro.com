<template>
  <div>
    <MenuSection title="Soups &amp; Sides">
      <MenuItem
        v-for="(side, index) in menu.soupsAndSides.soupsAndSides"
        :key="`side_item_${index}`"
        v-bind="side"
      />
    </MenuSection>
    <MenuSection title="Salads">
      <MenuItem
        v-for="(salad, index) in menu.soupsAndSides.salads"
        :key="`salad_item_${index}`"
        v-bind="salad"
      />
    </MenuSection>
  </div>
</template>

<script>
import { MenuSection, MenuItem } from "../../components";

export default {
  name: "Sides",
  components: {
    MenuSection,
    MenuItem,
  },
  inject: ["menu"],
}
</script>
