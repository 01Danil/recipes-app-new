import React from "react";
import { createRoot } from "react-dom/client";  // ✅ Правильный импорт
import Menu from "./components/Menu";
import data from "./data/recipes.json";

const rootElement = document.getElementById("root");  // Получаем root-элемент
const root = createRoot(rootElement);  // Создаём корневой рендер
root.render(<Menu recipes={data} />);  // Отображаем компонент