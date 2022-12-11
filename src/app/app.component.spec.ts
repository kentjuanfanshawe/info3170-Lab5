import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'unittest'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('unittest');
  // });

  /*
  Create a test that will check the following:
      1. The initial colour for font and background.
      2. That the colour for font and background are correctly changed when the button is pressed
  */

  it('#changeColor() should toggle #toggle to change font and background', () => {
    const comp = new AppComponent();

    expect(comp.toggle).withContext('off at first').toBe(false);

    comp.changeColor();
    expect(comp.toggle).withContext('on after click').toBe(true);

    comp.changeColor();
    expect(comp.toggle).withContext('off after second click').toBe(false);
  });

  it('should correctly change font and background when the button is pressed', () => {
    const comp = new AppComponent();

    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is dark/i);

    comp.changeColor();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch(/is light/i);
  });
});
