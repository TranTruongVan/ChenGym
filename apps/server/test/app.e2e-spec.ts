import { Test } from '@nestjs/testing';
import { AppModule } from '@server/app.module';
describe('AppController (e2e)', () => {
  beforeAll(async () => {
    const appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it.todo('should PASS');
});
