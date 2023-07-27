import { useForm,} from "react-hook-form"

export const Contact = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

    return(
        <div>
            <h1 className="font-extrabold mb-4 text-3xl"> Contact </h1>
            <p>Email: contact@graven.dev</p>

            <form className='mt-3' onSubmit={handleSubmit(onSubmit)} >
                <div className='mb-3'>
                <label className='block' htlmFor='sujet'> Sujet du mail </label>
                <input {...register('sujet')} className='border' type='text'name='sujet' id='sujet' placeholder='Quel est le sujet ?'/>
                </div>

               <div className='mb-3'>
               <label className='block' htlmFor='email'> Email </label>
                <input {...register('email')} className='border' type='email'name='email' id='email' placeholder='Votre mail?'/>
                
            
               </div>

               <div className='mb-3'>
               <label className='block' htlmFor='message'> Message </label>
                <textarea {...register('message')} rows={5} className='border resize-none' name='message' id='message' placeholder='Entrez votre message ?'/>
               </div>

                <input type='submit' className='block bg-orange-400 px-8 py-3 text-[white] border-1 hover:bg-[#1f1f2b]'/>
            </form>
        </div>
    )
}