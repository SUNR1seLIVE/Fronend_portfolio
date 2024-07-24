import { ToastServiceMethods } from "primevue/toastservice";
import { Ref, ref } from "vue";
import Core from "@/editor_1/core/Core";
import Router from "@/front/router";
import { mainMenuItem, Project } from "@/editor_1/types/Types";

export default class Constants {
  private toast: ToastServiceMethods;

  init(toast: ToastServiceMethods) {
    this.toast = toast;
  }

  itemsMainMenuPanel = (): Ref<mainMenuItem[]> => {
    return ref([
      {
        label: "Файл",
        icon: "pi pi-file",
        items: [
          {
            label: "Создать",
            icon: "pi pi-plus",
            items: [
              {
                label: "Модель",
                icon: "pi pi-file",
                command: () => {
                  Core.addProject();
                  const project = Core.getLatestProject();
                  if (project)
                    this.toast.add({
                      severity: "success",
                      summary: `Success`,
                      detail: `Проект ${project.name} создан успешно!`,
                      life: 3000,
                    });
                  // Core.activeProjectId.value = project.id;
                  // Core.projectControl.setActiveProject(project.id);
                  // Core.itemsMenu.value = Core.getItems(Core.toast).value;
                },
              },
              {
                separator: true,
              },
              {
                label: "Фурнитура",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "Фурнитура",
                    life: 3000,
                  });
                },
              },
              {
                label: "Фрагмент",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "Фрагмент",
                    life: 3000,
                  });
                },
              },
              {
                separator: true,
              },
              {
                label: "Чертёж",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "Чертёж",
                    life: 3000,
                  });
                },
              },
            ],
          },
          {
            label: "Открыть",
            icon: "pi pi-print",
            items: (function () {
              const result = [];
              const lastProjects = Core.latestProjects;
              for (const item of lastProjects.value) {
                result.push({
                  label: item.name,
                  icon: "pi pi-file",
                  command: () => {
                    Core.openProject(item.id);
                  },
                });
              }
              return result;
            })(),
          },
          {
            label: "Сохранить",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "Сохранить",
                life: 3000,
              });
            },
          },
          {
            label: "Сохранить как...",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Сохранить шаблон",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Сохранить фрагмент",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            separator: true,
          },
          {
            label: "Добавить модель",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Поставить фрагмент 2D",
            icon: "pi pi-file",
            command: () => {
              Core.updateActiveProject(1);
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Поставить фрагмент 3D",
            icon: "pi pi-file",
            command: () => {
              Core.updateActiveProject(2);
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            separator: true,
          },
          {
            label: "Библиотекарь",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            separator: true,
          },
          {
            label: "Закрыть текущий",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: `Прокет № ${Core.activeProject.value}`,
                life: 3000,
              });
              if (Core.activeProject.value !== null)
                Core.closeProject(Core.activeProject.value);
            },
          },
          {
            label: "Закрыть все",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Закрыть чертежи",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Закрыть все, кроме текущего",
            icon: "pi pi-file",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            separator: true,
          },
          {
            label: "Импорт",
            icon: "pi pi-plus",
            items: [
              {
                label: "Модель",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "File created",
                    life: 3000,
                  });
                },
              },
              {
                separator: true,
              },
              {
                label: "Фурнитура",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "File created",
                    life: 3000,
                  });
                },
              },
              {
                label: "Фрагмент",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "File created",
                    life: 3000,
                  });
                },
              },
              {
                separator: true,
              },
              {
                label: "Чертёж",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "File created",
                    life: 3000,
                  });
                },
              },
            ],
          },
          {
            label: "Экспорт",
            icon: "pi pi-plus",
            items: [
              {
                label: "Модель",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "File created",
                    life: 3000,
                  });
                },
              },
              {
                label: "Фурнитура",
                icon: "pi pi-file",
                command: () => {
                  this.toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "File created",
                    life: 3000,
                  });
                },
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: "Печать",
            icon: "pi pi-print",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            separator: true,
          },
          {
            label: "Выход",
            icon: "pi pi-print",
            command: () => {
              this.toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
              Router.push(`/startEditor_1`);
            },
          },
        ],
      },
    ]);
  };
  /*
    itemsMainMenuPanel: Ref<any[]> => {
      return ref([
        {,
          ],
        },
      ]);
    },
  
   */
}
