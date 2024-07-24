import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "@/front/layouts/MainLayout.vue";
import HomeView2 from "@/front/views/HomeView.vue";
import ProjectsView from "@/front/views/ProjectsView.vue";
import AboutView from "@/front/views/AboutView.vue";
import EditorLayout from "@/front/layouts/Editor/EditorLayout.vue";
import StartView from "@/front/views/Editor/Start_1View.vue";
import EditorView from "@/front/views/Editor/Editor_1View.vue";
import EditorStartLayout from "@/front/layouts/Editor/EditorStartLayout.vue";
import Editor_1StartLayout from "@/front/layouts/Editor_1/Editor_1StartLayout.vue";
import Editor_1Layout from "@/front/layouts/Editor_1/Editor_1Layout.vue";
import Start_1View from "@/front/views/Editor/Start_1View.vue";
import Editor_1View from "@/front/views/Editor/Editor_1View.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainLayout,
    children: [
      {
        path: "",
        component: HomeView2,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: MainLayout,
    children: [
      {
        path: "",
        component: AboutView,
      },
    ],
  },
  {
    path: "/projects",
    name: "projects",
    component: MainLayout,
    children: [
      {
        path: "",
        component: ProjectsView,
      },
    ],
  },
  {
    path: "/startEditor",
    name: "startEditor",
    component: EditorStartLayout,
    children: [
      {
        path: "",
        component: StartView,
      },
    ],
  },
  {
    path: "/editor",
    name: "editor",
    component: EditorLayout,
    children: [
      {
        path: "",
        component: EditorView,
      },
    ],
  },
  {
    path: "/startEditor_1",
    name: "startEditor_1",
    component: Editor_1StartLayout,
    children: [
      {
        path: "",
        component: Start_1View,
      },
    ],
  },
  {
    path: "/editor_1",
    name: "editor_1",
    component: Editor_1Layout,
    children: [
      {
        path: "",
        component: Editor_1View,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
