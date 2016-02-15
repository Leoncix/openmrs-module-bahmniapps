describe("PatientProgramMapper", function () {
    var mapper = new Bahmni.Common.Domain.PatientProgramMapper();
    it('should map dateCompleted', function () {
        var patientProgram = {
            uuid: "somePatientProgramUuid",
            dateCompleted: "Fri Dec 11 2015 12:04:23 GMT+0530 (IST)"
        };
        var dateCompleted = "Fri Dec 11 2015 12:04:23 GMT+0530 (IST)";

        var mappedPatientProgram = mapper.map(patientProgram, [], dateCompleted);
        expect(moment(mappedPatientProgram.dateCompleted).isSame(moment("2015-12-11T12:04:23+0530"))).toBe(true);
    });

    it('should map outcome', function () {
        var patientProgram = {
            uuid: "somePatientProgramUuid",
            dateCompleted: "Fri Dec 11 2015 12:04:23 GMT+0530 (IST)",
            outcomeData: {
                "uuid": "outcome-uuid"
            }
        };
        var dateCompleted = "Fri Dec 11 2015 12:04:23 GMT+0530 (IST)";

        var mappedPatientProgram = mapper.map(patientProgram, [], dateCompleted);
        expect(mappedPatientProgram.outcome).toEqual("outcome-uuid")
    });



});