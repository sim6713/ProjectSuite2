let FTreeList = Aliases.TestTD32.FMain.MDIClient.FTreeList;

// The main test function
function Main()
{
  //1.Запустить приложение
  let process = RunApplication();
  
  //2.Развернуть приложение на весь экран
  let WinMain = MaximizeApp(process);
  
  //3.Выбрать раздел "Форма с TreeList"
  OpenFormEdit(WinMain); 
  let treelist = FTreeList.tlTest; Delay(1000);
  
  //4.Свернуть элемент 24
  treelist.ClickCell(1, "id"); Delay(1000);
  
  for (i=0; i < 7; i++)
  {
    treelist.Keys("[Down]")
  }
  
  treelist.Keys("[NumMinus]"); Delay(1000);
  Delay(3000);
  
  //5.Свернуть элемент 17
  treelist.ClickCell(1, "id"); Delay(1000);
  treelist.Keys("[NumMinus]"); Delay(1000);
  Delay(3000);
  
  //6.Изменить атрибут name у элемента 58
  treelist.ClickCell(3, "id"); Delay(1000);
  for (i=0; i < 9; i++)
  {
    treelist.Keys("[Down]")
  }
  Delay(3000);
  
  treelist.Keys("[Right]");
  treelist.Keys("AAA");
  treelist.Keys("[Enter]");
  
  //7.Удалить значение атрибута name у элемента 25
  treelist.ClickCell(1, "id"); Delay(1000);
  treelist.Keys("[NumPlus]");  Delay(1000);
  
  for (i=0; i < 7; i++)
  {
    treelist.Keys("[Down]")
  }
  
   treelist.Keys("[NumPlus]"); Delay(1000);
   treelist.Keys("[Down]");    Delay(1000);
   treelist.Keys("[Right]");   Delay(1000);
   treelist.Keys("[BS]");      Delay(1000);
   treelist.Keys("[Enter]");   Delay(1000);  
  
   Delay(3000);
   
  //8.Закрыть вкладку "Форма с Tree List"
  FTreeList.Close(); Delay(1000);
  
  // Закрываем приложение
  CloseApp(process);
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Запустить приложение
function RunApplication()
{
  return TestedApps.TestTD32.Run();
}

// азвернуть приложение на весь экран
function MaximizeApp(p)
{
  w = p.WaitWindow("TFMain", "FMain", -1, 5000);
  
  if (w.Exists)
    {
      w.Activate();
      Log.Picture(w, "MaximizeApp");
    }
    else
      Log.Warning("Incorrect window - MaximizeApp");
      
  w.Maximize();
  return w;
}

//Выбрать раздел "Форма с TreeList"
function OpenFormEdit(w)
{
  if (w.Exists)
    {
      w.Activate();
      w.Click(60, 100);
      Log.Picture(w, "OpenFormTreeList");
    }
    else
      Log.Warning("Incorrect window - OpenFormTreeList");   
}

// Close the application
function CloseApp(p)
{   
  p.Close(0);
}