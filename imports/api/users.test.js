import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { validateNewUser } from './users';

if (Meteor.isServer) {
    describe('Users', function () {
        it('should allow valid emails', function () {
            const testUser = {
                emails: [
                    {
                        address: 'test@test.com'
                    }
                ]
            }

            const res = validateNewUser(testUser);

            expect(res).toBe(true);
        });

        it ('should reject invalid emails', function () {
            const testUser = {
                emails: [
                    {
                        address: 'failtest.com'
                    }
                ]
            };

            expect(() => {
                validateNewUser(testUser);
            }).toThrow();
        });
    });
}
