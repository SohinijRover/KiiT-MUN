import { Select, SelectCommittee } from "./Fields";
import { BiWorld } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { useFormikContext } from "formik";
import { SINGLEDELEGATECOMMITTEE, DOUBLEDELEGATECOMMITTEE, whatToMapCommitteeOne, whatToMapCommitteeThree, whatToMapCommitteeTwo, ip } from "@/utils";
import { useEffect } from "react";

type CommitteeBlockProps = {
  name: string,
  delegate: string,
}
type delegateNumProps = {
  name: string,
}

export const DelegateNum = ({ name }: delegateNumProps) => {
  return (
    <div className="flex items-center px-10 my-10">
      <span className="w-full h-[2px] bg-white"></span>
      <h1 className="text-xl md:text-2xl lg:text-3xl flex-shrink-0 px-4">{name}</h1>
      <span className="w-full h-[2px] bg-white"></span>
    </div>
  )
}

const CountryBlock = ({ name, mapper, ipOne }: { name: string, mapper: string[], ipOne: boolean }) => {
  const { values, setFieldValue } = useFormikContext<FormikValues>()

  const One = `${name}_countryOne`
  const Two = `${name}_countryTwo`
  const Three = `${name}_countryThree`
  const C1country1 = mapper.filter(v => v !== values[Two] && v !== values[Three])
  const C1country2 = mapper.filter(v => v !== values[One] && v !== values[Three])
  const C1country3 = mapper.filter(v => v !== values[One] && v !== values[Two])

  useEffect(() => {
    if (values[name] === '') {
      setFieldValue(`${name}_countryOne`, '')
      setFieldValue(`${name}_countryTwo`, '')
      setFieldValue(`${name}_countryThree`, '')
    }
    if (values[name] === 'IP') {
      setFieldValue(`${name}_countryThree`, 'NA')
    }
  }, [name, setFieldValue, values])

  useEffect(() => {
    if (!C1country1.includes(values[One]) && values[One]) {
      setFieldValue(`${name}_countryOne`, '')
    }
    if (!C1country2.includes(values[Two]) && values[Two]) {
      setFieldValue(`${name}_countryTwo`, '')
    }
    if (values[name] !== 'IP') {
      if (!C1country3.includes(values[Three]) && values[Three]) {
        setFieldValue(`${name}_countryThree`, '')
      }
    }
  }, [C1country1, C1country2, C1country3, One, Three, Two, name, setFieldValue, values])

  return (<div className="w-full flex flex-col gap-3 lg:gap-6">
    <div>

      <Select icon={<BiWorld />}
        className="w-full md:w-full"
        name={`${name}_countryOne`}
      >
        <option value="">Choose a country</option>
        {C1country1.map((n, index) => (
          <option key={index} value={n}>{n}</option>
        ))}
      </Select>
    </div>
    <div>
      <Select icon={<BiWorld />}
        className="w-full md:w-full"
        name={`${name}_countryTwo`}>
        <option value="">Choose a country</option>
        {C1country2.map((n, index) => (
          <option key={index} value={n}>{n}</option>
        ))}
      </Select>
    </div>
    <Select icon={<BiWorld />}
      className={`${ipOne ? 'hidden' : 'w-full md:w-full'} `}
      name={`${name}_countryThree`}>
      <option value="">Choose a country</option>
      {C1country3.map((n, index) => (
        <option key={index} value={n}>{n}</option>
      ))}
    </Select>
  </div>)
}


const CommitteeBlock = ({ name, delegate }: CommitteeBlockProps) => {
  const { values } = useFormikContext<FormikValues>()

  const COMMITTEE = delegate === 'single' ? SINGLEDELEGATECOMMITTEE : delegate === 'double' ? DOUBLEDELEGATECOMMITTEE : []

  const committee1 = COMMITTEE.filter(v => v !== values.committeeTwo && v !== values.committeeThree)
  const committee2 = COMMITTEE.filter(v => v !== values.committeeOne && v !== values.committeeThree)
  const committee3 = COMMITTEE.filter(v => v !== values.committeeOne && v !== values.committeeTwo)
  const mapper = name === 'committeeOne' ? committee1 : name === 'committeeTwo' ? committee2 : committee3

  return (
    <div className="w-full">
      <div className="w-full">
        <SelectCommittee icon={<TfiWorld />}
          className="w-full"
          name={`${name}`}
        >
          <option value="">Committees</option>
          {mapper.map((age, index) => (
            <option key={index} value={age}>{age}</option>
          ))}
        </SelectCommittee>
      </div>

    </div>
  )
}

export type FormikValues = {
  accommodation_type: string;
  committeeOne_countryTwo: string;
  committeeOne_countryOne: string;
  committeeOne_countryThree: string;
  committeeThree: string;
  committeeOne: string;
  committeeTwo: string;
  accommodation: string
}

const Committee = ({ delegate }: { delegate: string }) => {
  const { values, setFieldValue } = useFormikContext<FormikValues>()

  useEffect(() => {
    if (values.accommodation === 'Yes' && values.accommodation_type !== '3-bed NON-AC') {
      setFieldValue('accommodation_type', '3-bed AC')
    }

  }, [setFieldValue, values])

  const countryOneMapper = whatToMapCommitteeOne(values)
  const countryTwoMapper = whatToMapCommitteeTwo(values)
  const countryThreeMapper = whatToMapCommitteeThree(values)


  const ipIsChosenOne = values.committeeOne === 'IP'
  const ipIsChosenTwo = values.committeeTwo === 'IP'
  const ipIsChosenThree = values.committeeThree === 'IP'
  return (
    <div className="lg:px-10 relative gap-8 pb-10 flex flex-col mt-6">
      <div className="flex flex-col md:flex-row gap-3 md:gap-6">
        <CommitteeBlock name="committeeOne" delegate={delegate} />
        <CountryBlock name="committeeOne" ipOne={ipIsChosenOne} mapper={countryOneMapper} />
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-6">
        <CommitteeBlock name="committeeTwo" delegate={delegate} />
        <CountryBlock name="committeeTwo" ipOne={ipIsChosenTwo} mapper={countryTwoMapper} />
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6">
        <CommitteeBlock name="committeeThree" delegate={delegate} />
        <CountryBlock name="committeeThree" ipOne={ipIsChosenThree} mapper={countryThreeMapper} />
      </div>

      <DelegateNum name="Accommodation Details" />
      <div className="flex gap-2 md:gap-8 flex-col md:flex-row -mt-4">
        <Select
          icon={<BiWorld />}
          className="w-full md:w-[49%] "
          name="accommodation"
        >
          <option value="">Accommodation</option>
          {['Yes', 'No'].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>
        {values.accommodation === "Yes" && <Select
          icon={<BiWorld />}
          className="w-full md:w-[49%]"
          name="accommodation_type"
        >
          {/* <option value="">Type</option> */}
          {['3-bed AC', '3-bed NON-AC'].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </Select>}

      </div>

    </div>
  )
};

export default Committee;
