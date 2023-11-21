<script lang="ts" setup>
interface GNB {
  to: string,
  label: string,
  node?: Array<GNB>,
}
const nav : GNB[] = [
  {
    to : "/home",
    label: "HOME",
    node: [
      {
        to: "/home",
        label: "HOME1",
      },
      {
        to: "/home/1",
        label: "HOME2",
      }
    ],
  },
  {
    to : "/about",
    label: "ABOUT",
    node: [
      {
        to: "/about",
        label: "ABOUT1",
      },
      {
        to: "/about/1",
        label: "ABOUT2",
      }
    ],
  },
  {
    to : "/about",
    label: "ABOUT",
    node: [
      {
        to: "/about",
        label: "ABOUT1",
      },
      {
        to: "/about/1",
        label: "ABOUT2",
      }
    ],
  }
]
</script>

<template>
  <nav class="gnb">
    <div class="gnbInner">
      <ul class="gnbListDepth1">
        <li v-for="(parent, i) in nav" :key="i">
          <router-link :to="parent.to" class="depth1">{{parent.label}}</router-link>
        </li>
      </ul>
      <div class="gnbListDepth2Wrap">
        <ul class="gnbListDepth2" v-for="(parent, i) in nav" :key="i">
          <li v-for="(node, j) in parent.node" :key="j">
            <router-link class="depth2" :to="node.to">{{node.label}}</router-link>
          </li>
        </ul>
      </div>
      <div class="gnbSub" v-if="false">
        <span>
          <router-link class="link" to="/">SUB</router-link>
        </span>
      </div>
    </div>
  </nav>

</template>