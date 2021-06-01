<template>
  <MenuSection title="Appetizers">
    <MenuItem
      v-for="(appetizer, index) in menu.appetizers"
      :key="`appetizer_item_${index}`"
      v-bind="appetizer"
    />
  </MenuSection>
</template>

<script>
import { MenuSection, MenuItem } from "../../components";

export default {
  name: "Appetizers",
  components: {
    MenuSection,
    MenuItem,
  },
  inject: ["menu"],
}
</script>
