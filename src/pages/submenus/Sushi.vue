<template>
  <div>
    <MenuSection title="Nigiri">
      <MenuItem
        v-for="(item, index) in menu.sushi.nigiri"
        :key="`nigiri_item_${index}`"
        v-bind="item"
      />
    </MenuSection>
    <MenuSection title="Sashimi">
      <MenuItem
        v-for="(item, index) in menu.sushi.sashimi"
        :key="`sashimi_item_${index}`"
        v-bind="item"
      />
    </MenuSection>
    <MenuSection title="Maki Rolls">
      <MenuItem
        v-for="(item, index) in menu.sushi.maki"
        :key="`maki_item_${index}`"
        v-bind="item"
      />
    </MenuSection>
    <MenuSection title="Appetizers">
      <MenuItem
        v-for="(item, index) in menu.sushi.appetizers"
        :key="`sushi_appetizer_item_${index}`"
        v-bind="item"
      />
    </MenuSection>
  </div>
</template>

<script>
import { MenuSection, MenuItem } from "../../components";

export default {
  name: "Sushi",
  components: {
    MenuSection,
    MenuItem,
  },
  inject: ["menu"],
}
</script>
