import React, {useState} from 'react';
import './App.css';


function App() {
  const [activetab,setActivetab] = useState('home');
  const [proposal,setProposal] = useState({title:'',category:'هوش مصنوعی',desciption:''});
  const [submitted,setSubmitted] = useState(false);
  const courses = [
    {id: 1, title:"هوش مصنوعی ویادگیری ماشین",category: 'فناوری',mentor: 'دکتر رضایی',cpacity: '12 نفر'},
    {id: 2, title:'رباتیک پیشرفته و سامانه های خود مختار',category: 'مهندسی',mentor: 'مهندس کاظمی',cpacity: '8 نفر'},
    {id: 3, title:'المپیاد ریاضی وتفکرمنطقی',category: 'علوم پایه',mentor: 'دکتر شریفی',cpacity: '15 نفر'},
  ];

return (
  <div className="app-container">
   <header className="header">
     <div  className="logo"> * مرکز ملی نخبه پروری نوین </div>
     <nav className="nav">
       <button className={activetab === 'home' ? 'active':''} onClick={()=>setActivetab('home')}>صفحه اصلی </button>
       <button className={activetab === 'courses' ? 'active':''} onClick={()=>setActivetab('courses')}>دوره ها وکارگاه ها </button>
       <button className={activetab === 'proposal' ? 'active':''} onClick={()=>setActivetab('proposal')}>ثبت پروپوزال </button>
       <button className={activetab === 'dashboard' ? 'active':''} onClick={()=>setActivetab('dashboard')}>مدیریت داشبورد </button>
    </nav>
  </header>

  {activetab === 'home' && (
    <main className="hero">
      <h1>پرورش هدایت و شکوفایی نخبگان آینده</h1>
      <p>پلتفرم جامع مدیریت و توانمندسازی دانش آموزان و دانشجویان مستعد</p>
      <div className="stats-grid">
        <div className="stat-card"><h3>+1400</h3><p>نخبه فعال</p></div>
        <div className="stat-card"><h3>+1400</h3><p>مدال جهانی</p></div>
        <div className="stat-card"><h3>+1400</h3><p>طرح پزوهشی</p></div>

      </div>
    </main>
  )}

  {activetab === 'courses' &&(
    <section className="section">
    <h2>دوره های تخصصی و وکارگاه های مهارت آفرینی</h2>
    <div className="cards-grid">
      {courses.map(c =>(
        <div key= {c.id} className="card">
          <span className="badge">{c.category}</span>
          <h3>{c.title}</h3>
          <p>استاد راهنما: {c.menter}</p>
          <p>ظرفیت باقی مانده: {c.capacity}</p>
          <button className="btn-primary">رزرو وثبت نام</button>

        </div>
      ))}

     </div>
    </section>

  )}

{activetab === 'proposal' && (
  <section className="section">
  <h2>سامانه ثبت وداوری پروپوزال های پژوهشی</h2>
  {!submitted ? (
    <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}} className="form">
      <input
      type="text"
      placeholder="عنوان طرح پژوهشی"
      value={proposal.title}
      onChange={(e)=>setProposal({...proposal,title: e.target.value})}
      required
      />
      <select
      value={proposal.category}
      onChange={(e)=>setProposal({...proposal,category: e.target.value})}
      >
        <option>هوش مصنوعی</option>
        <option>رباتیک</option>
        <option>علوم پایه</option>
      </select>
      <textarea
        placeholder="شرح خلاصه طرح و اهداف..."
        value={proposal.desciption}
        onChange={(e)=> setProposal({...proposal,desciption: e.target.value})}
        required
      ></textarea>
      <button type="submit" className="btn-primary">ارسال پروپوزال جهت داوری</button>



    </form>
  ) : (
    <div className="success-box">
      <h3>!پروپوزال شما با موفقیت ثبت شد </h3>
      <p>کد پیگیری :<strong>ELITE-1403-9982</strong></p>
      <button onClick={() => setSubmitted(false)} className="btn-secondary">ثبت طرح جدید</button>
    </div>

   )}
 </section>
)}
{activetab === 'dashboard' && (
  <section className="section">
    <h2>داشبورد مدیریتی و نظارت کلان</h2>
    <div className="dashboard-grid">
      <div className="dash-card">
        <h4>درخواست های در انتظار داوری</h4>
        <p className="big-number">مورد 18</p>
      </div>
      <div className="dash-card">
        <h4>بودجه تخصیص یافته پژوهشی</h4>
        <p className="big-number"> 450میلیون تومان </p>
      </div>
      <div className="dash-card">
        <h4>رویداد های پیش رو</h4>
        <p className="big-number">همایش ملی 4</p>
      </div>
    </div>
  </section>
     )}
  </div>
 );
}

export default App;
