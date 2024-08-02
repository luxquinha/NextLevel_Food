import ImagePicker from '@/components/Meals/ImagePicker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import FormSubmitButton from '@/components/Meals/FormSubmitButton';

export const metadata = {
  title: 'Share your recipes',
  description: 'Share your favorite meal or any other meal you feel needs sharing!',
};

export default function ShareMealPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.col}>
            <div className={classes.row}>
              <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" required autoComplete='off'/>
              </p>
              <p>
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" required autoComplete='off'/>
              </p>
            </div>
            <div className={classes.col}>
              <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required autoComplete='off'/>
              </p>
              <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" required autoComplete='off'/>
              </p>
              <p>
                <label htmlFor="instructions">Instructions</label>
                <textarea
                  id="instructions"
                  name="instructions"
                  rows="10"
                  required
                ></textarea>
              </p>
            </div>
          </div>
          <div className={classes.col}>
            <ImagePicker label='Your image' name='image'/>
            <p className={classes.actions}>
              <FormSubmitButton />
            </p>
          </div>
        </form>
      </main>
    </>
  );
}
