import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should return null via getToken if it is not saved', () => {
    const service: AuthService = TestBed.get(AuthService);
    const token = service.getToken();

    expect(token).toEqual(null);
  });

  it('should return token saved to localStorage', () => {
    const service: AuthService = TestBed.get(AuthService);
    localStorage.setItem('TOKEN', 'asd');
    const token = service.getToken();

    expect(token).toEqual('asd');
  });
});
