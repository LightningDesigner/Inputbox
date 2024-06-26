import TextFieldWithLimit from './TextFieldWithLimit';


function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[453px] h-[hug] p-[52px] bg-white rounded-[8px] border flex flex-col justify-center gap-[16px]">
      <label className="font-[442] text-black opacity-100 text-[14px]">
          Full name
      </label>
      <div>
        <TextFieldWithLimit />  
      </div>
      </div>
    </div>
  );
}

export default App;
