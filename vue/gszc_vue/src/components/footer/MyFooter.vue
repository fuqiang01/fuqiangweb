<template>
  <div class="footer">
    <Benefit />
    <FooterList />
    <Link />
    <Beian />
  </div>
</template>

<script>
import Benefit from "@/components/footer/Benefit";
import FooterList from "@/components/footer/FooterList";
import Link from "@/components/footer/Link";
import Beian from "@/components/footer/Beian";
export default {
  components: {
    Benefit,
    FooterList,
    Link,
    Beian
  }
};
</script>