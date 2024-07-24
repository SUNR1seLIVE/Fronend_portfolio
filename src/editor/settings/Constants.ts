import { ToastServiceMethods } from "primevue/toastservice";
import Router from "@/front/router";
import Core from "@/editor/core/Core";
import { useProjectsStore } from "@/store/editor/ProjectsStore";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

export default {
  itemsMainMenuPanel: (toast: ToastServiceMethods) => {
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
                  const project = useProjectsStore().addProject();
                  toast.add({
                    severity: "success",
                    summary: `Success`,
                    detail: `Проект ${project.name} создан успешно!`,
                    life: 3000,
                  });
                  Core.activeProjectId.value = project.id;
                  Core.projectControl.setActiveProject(project.id);
                  Core.itemsMenu.value = Core.getItems(Core.toast).value;
                },
              },
              {
                separator: true,
              },
              {
                label: "Фурнитура",
                icon: "pi pi-file",
                command: () => {
                  toast.add({
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
                  toast.add({
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
                  toast.add({
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
            label: "Открыть",
            icon: "pi pi-print",
            items: (function () {
              const result = [];
              for (const item of Core.getProjects().value) {
                result.push({
                  label: item.name,
                  icon: "pi pi-file",
                  command: () => {
                    useProjectsStore().openProject(item.id);
                    Core.activeProjectId.value = item.id;
                    Core.projectControl.setActiveProject(item.id);
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
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Сохранить как...",
            icon: "pi pi-file",
            command: () => {
              toast.add({
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
              toast.add({
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
              toast.add({
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
              toast.add({
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
              toast.add({
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
              toast.add({
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
              toast.add({
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
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Закрыть все",
            icon: "pi pi-file",
            command: () => {
              toast.add({
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
              toast.add({
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
              toast.add({
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
                  toast.add({
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
                  toast.add({
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
                  toast.add({
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
                  toast.add({
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
                  toast.add({
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
                  toast.add({
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
              toast.add({
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
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
              Router.push(`/editor`);
            },
          },
        ],
      },
      {
        label: "Правка",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Группировка",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Выделение",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Удалить",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Изделие",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Настройка",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Инструменты",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Окно",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Справка",
        icon: "pi pi-file",
        items: [
          {
            label: "Отменить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Повторить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
            label: "Копировать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вырезать",
            icon: "pi pi-print",
            command: () => {
              toast.add({
                severity: "success",
                summary: "Success",
                detail: "File created",
                life: 3000,
              });
            },
          },
          {
            label: "Вставить",
            icon: "pi pi-print",
            command: () => {
              toast.add({
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
        label: "Search",
        icon: "pi pi-search",
        command: () => {
          const root = document.getElementsByTagName("html")[0];

          root.classList.toggle("p-dark");
          // this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
          toast.add({
            severity: "warn",
            summary: "Search Results",
            detail: "No results found",
            life: 3000,
          });
        },
      },
      {
        separator: true,
      },
      {
        label: "Sync",
        icon: "pi pi-cloud",
        items: [
          {
            label: "Import",
            icon: "pi pi-cloud-download",
            command: () => {
              toast.add({
                severity: "info",
                summary: "Downloads",
                detail: "Downloaded from cloud",
                life: 3000,
              });
            },
          },
          {
            label: "Export",
            icon: "pi pi-cloud-upload",
            command: () => {
              toast.add({
                severity: "info",
                summary: "Shared",
                detail: "Exported to cloud",
                life: 3000,
              });
            },
          },
        ],
      },
    ]);
  },
};
